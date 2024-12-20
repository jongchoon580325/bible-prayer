'use client';

import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileUpload } from "./FileUpload";
import { textProcessor } from "@/services/textProcessor";
import { prayerGenerator } from "@/services/prayerGenerator";
import { PrayerType } from "@/types/scripture";
import { PrayerOutput } from "../output/PrayerOutput";

export function ScriptureInput() {
  const [text, setText] = React.useState('');
  const [generatedPrayers, setGeneratedPrayers] = React.useState<{[key in PrayerType]?: string}>({});

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setGeneratedPrayers({});
  };

  const handleFileContent = (content: string) => {
    setText(content);
    setGeneratedPrayers({});
  };

  const handleSubmit = () => {
    if (!text.trim()) {
      alert('성경 구절을 입력해주세요.');
      return;
    }

    const scriptureData = textProcessor.parseScripture(text);
    
    const beginnerPrayer = prayerGenerator.generatePrayer(scriptureData, 'beginner');
    const advancedPrayer = prayerGenerator.generatePrayer(scriptureData, 'advanced');

    setGeneratedPrayers({
      beginner: beginnerPrayer,
      advanced: advancedPrayer,
    });
  };

  return (
    <div className="space-y-8 w-full max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">직접 입력</h2>
        <Textarea
          placeholder="성경 구절을 입력하세요..."
          className="min-h-[200px] p-4"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">또는 파일 업로드</h2>
        <FileUpload onFileContent={handleFileContent} />
      </div>

      <Button 
        className="w-full"
        onClick={handleSubmit}
      >
        기도문 생성하기
      </Button>

      <PrayerOutput prayers={generatedPrayers} />
    </div>
  );
} 