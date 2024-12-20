import { ScriptureData, PrayerType } from '@/types/scripture';

class PrayerGenerator {
  private readonly beginnerTemplates = [
    "사랑하는 {형용사} 하나님 아버지!\n\n{본문}\n\n이 말씀을 통해 {주제}을(를) 깨닫게 하시니 감사합니다.\n{기도내용}\n\n예수님의 이름으로 기도합니다. 아멘.",
  ];

  private readonly advancedTemplates = [
    "거룩하신 {형용사} 하나님 아버지!\n\n{본문}\n\n이 말씀으로 {주제}의 깊이를 깨닫게 하시니 감사드립니다.\n{기도내용}\n\n예수님의 이름으로 기도드립니다. 아멘.",
  ];

  generatePrayer(scriptureData: ScriptureData, type: PrayerType): string {
    const template = this.getTemplate(type);
    const adjective = this.getRandomAdjective();
    const prayerContent = this.generatePrayerContent(scriptureData, type);

    return template
      .replace('{형용사}', adjective)
      .replace('{본문}', scriptureData.text)
      .replace('{주제}', scriptureData.context.theme)
      .replace('{기도내용}', prayerContent);
  }

  private getTemplate(type: PrayerType): string {
    const templates = type === 'beginner' ? this.beginnerTemplates : this.advancedTemplates;
    return templates[Math.floor(Math.random() * templates.length)];
  }

  private getRandomAdjective(): string {
    const adjectives = ['자비로우신', '은혜로우신', '거룩하신', '선하신', '의로우신'];
    return adjectives[Math.floor(Math.random() * adjectives.length)];
  }

  private generatePrayerContent(scriptureData: ScriptureData, type: PrayerType): string {
    const { mainPoints } = scriptureData.context;
    
    return mainPoints
      .map(point => type === 'beginner' 
        ? `\n${point}을(를) 실천하며 살게 도와주세요.`
        : `\n${point}의 영적 의미를 깊이 깨닫고 실천하게 하옵소서.`)
      .join('');
  }
}

export const prayerGenerator = new PrayerGenerator(); 