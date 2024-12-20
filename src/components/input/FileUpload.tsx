'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFileContent: (content: string) => void;
}

export function FileUpload({ onFileContent }: FileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file: File) => {
    // 파일 크기 체크 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('파일 크기는 5MB를 초과할 수 없습니다.');
      return;
    }

    // 파일 형식 체크
    const validTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      alert('txt, doc, docx 파일만 업로드 가능합니다.');
      return;
    }

    try {
      const text = await file.text();
      onFileContent(text);
    } catch (error) {
      console.error('파일 읽기 오류:', error);
      alert('파일을 읽는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div 
      className={`relative border-2 border-dashed rounded-lg p-8 text-center
        ${dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".txt,.doc,.docx"
        onChange={handleChange}
      />
      <p className="mb-4 text-sm text-gray-500">
        파일을 드래그하여 놓거나 클릭하여 선택하세요
      </p>
      <p className="text-xs text-gray-400 mb-4">
        지원 형식: TXT, DOC, DOCX (최대 5MB)
      </p>
      <Button
        variant="outline"
        onClick={() => inputRef.current?.click()}
      >
        파일 선택
      </Button>
    </div>
  );
} 