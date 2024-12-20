import { ScriptureData, ContextData } from '@/types/scripture';

class TextProcessor {
  parseScripture(input: string): ScriptureData {
    // 임시 구현
    const keywords = this.extractKeywords(input);
    const context = this.analyzeContext(input);

    return {
      text: input,
      keywords,
      context,
    };
  }

  extractKeywords(text: string): string[] {
    // 임시로 단어 빈도수 기반 키워드 추출
    const words = text.split(/\s+/).filter(word => word.length > 1);
    const wordFreq = new Map<string, number>();
    
    words.forEach(word => {
      const count = wordFreq.get(word) || 0;
      wordFreq.set(word, count + 1);
    });

    return Array.from(wordFreq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word);
  }

  analyzeContext(text: string): ContextData {
    // 임시 구현 - text 파라미터 활용
    const words = text.split(/\s+/);
    const hasLove = words.some(word => word.includes('사랑'));
    const hasGrace = words.some(word => word.includes('은혜'));
    const hasFaith = words.some(word => word.includes('믿음'));

    return {
      theme: hasLove ? "하나님의 사랑" : 
             hasGrace ? "하나님의 은혜" : 
             hasFaith ? "믿음의 중요성" : "하나님의 뜻",
      mainPoints: [
        hasLove ? "하나님의 사랑" : "하나님의 뜻",
        hasFaith ? "믿음의 중요성" : "순종의 중요성"
      ],
      emotionalTone: hasGrace ? "감사" : "경외",
    };
  }
}

export const textProcessor = new TextProcessor(); 