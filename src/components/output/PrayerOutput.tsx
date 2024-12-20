'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PrayerType } from "@/types/scripture";

interface PrayerOutputProps {
  prayers: {[key in PrayerType]?: string};
}

export function PrayerOutput({ prayers }: PrayerOutputProps) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('기도문이 클립보드에 복사되었습니다.');
    } catch (err) {
      console.error('복사 실패:', err);
      alert('기도문 복사에 실패했습니다.');
    }
  };

  const sharePrayer = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '말씀기도',
          text: text,
        });
      } catch (err) {
        console.error('공유 실패:', err);
      }
    } else {
      await copyToClipboard(text);
    }
  };

  if (!prayers.beginner && !prayers.advanced) {
    return null;
  }

  return (
    <Tabs defaultValue="beginner" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="beginner">초심자용</TabsTrigger>
        <TabsTrigger value="advanced">경륜자용</TabsTrigger>
      </TabsList>
      <TabsContent value="beginner">
        <Card>
          <CardContent className="space-y-4 pt-4">
            <div className="whitespace-pre-wrap p-4 bg-muted rounded-lg">
              {prayers.beginner}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => prayers.beginner && copyToClipboard(prayers.beginner)}
              >
                복사하기
              </Button>
              <Button
                variant="outline"
                onClick={() => prayers.beginner && sharePrayer(prayers.beginner)}
              >
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="advanced">
        <Card>
          <CardContent className="space-y-4 pt-4">
            <div className="whitespace-pre-wrap p-4 bg-muted rounded-lg">
              {prayers.advanced}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => prayers.advanced && copyToClipboard(prayers.advanced)}
              >
                복사하기
              </Button>
              <Button
                variant="outline"
                onClick={() => prayers.advanced && sharePrayer(prayers.advanced)}
              >
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 