'use client';

import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ScriptureInput() {
  const [text, setText] = React.useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // TODO: 분석 로직 구현
    console.log('Submitted text:', text);
  };

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
      <Textarea
        placeholder="성경 구절을 입력하세요..."
        className="min-h-[200px] p-4"
        value={text}
        onChange={handleTextChange}
      />
      <Button 
        className="w-full"
        onClick={handleSubmit}
      >
        기도문 생성하기
      </Button>
    </div>
  );
} 