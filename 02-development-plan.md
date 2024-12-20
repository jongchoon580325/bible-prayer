# 하나님의 말씀으로 기도하기 웹앱 개발 계획

## 1. 프로젝트 개요
- 프로젝트명: 말씀기도 (WordPrayer)
- 목적: 성경 본문을 기반으로 개인화된 기도문을 자동 생성하는 웹 애플리케이션

## 2. 기술 스택
- Frontend: React(ver 18.2.0), Next.js(ver 14.2.11), TypeScript
- UI Framework: shadcn/ui
- 상태관리: React Context API
- 파일처리: File API
- 파일저장: localStorage
- API 통신: Axios
- Build Tool: Vite

## 3. 주요 기능 구현 계획

### 3.1 입력 섹션
- 텍스트 입력 필드
  - 성경 구절 직접 입력 기능
  - 멀티라인 텍스트 에어리어 형태
- 파일 업로드 기능
  - .txt, .doc, .docx 파일 지원
  - 드래그 앤 드롭 지원
  - 파일 크기 제한: 5MB

### 3.2 분석 엔진
- 성경 본문 파싱 로직
- 핵심 키워드 추출
- 문맥 분석
- 기도문 생성 규칙 적용
  - 초심자용: 간단하고 직관적인 표현 사용
  - 경륜자용: 깊이 있는 영적 표현과 성경적 용어 활용

### 3.3 출력 섹션
- 두 가지 유형의 기도문 표시
  - 탭 형태로 구분
  - 복사하기 버튼
  - 공유하기 기능
- 기도문 포맷팅
  - 시작문구 자동 추가
  - 종료문구 자동 추가
  - 단락 구분

## 4. UI/UX 디자인 계획

### 4.1 레이아웃
```
+------------------+
|      Header      |
+------------------+
|   입력 섹션      |
| +-------------+  |
| |텍스트 입력  |  |
| +-------------+  |
| |파일 업로드  |  |
| +-------------+  |
|   분석 버튼      |
+------------------+
|   출력 섹션      |
| [초심자][경륜자] |
| +-------------+  |
| |  기도문     |  |
| |  표시 영역  |  |
| +-------------+  |
+------------------+
```

### 4.2 색상 팔레트
- Primary: #1E40AF (깊은 파랑)
- Secondary: #60A5FA (밝은 파랑)
- Background: #F3F4F6 (연한 회색)
- Text: #1F2937 (진한 회색)
- Accent: #4B5563 (중간 회색)

### 4.3 반응형 디자인
- Mobile: 320px ~ 768px
- Tablet: 768px ~ 1024px
- Desktop: 1024px ~

## 5. 개발 단계
1. 프로젝트 환경 설정
2. UI 컴포넌트 개발
3. 파일 처리 기능 구현
4. 텍스트 분석 로직 개발
5. 기도문 생성 엔진 개발
6. 테스트 및 디버깅
7. 최적화 및 배포

## 6. 추가 고려사항
- 성능 최적화
- 사용자 데이터 보안
- 오프라인 지원
- 다국어 지원 가능성
- 접근성 고려

## 7. 구현 세부사항

### 7.1 텍스트 처리 로직
```typescript
interface TextProcessor {
  parseScripture(input: string): ScriptureData;
  extractKeywords(text: string): string[];
  analyzeContext(text: string): ContextData;
}
```

### 7.2 기도문 생성 엔진
```typescript
interface PrayerGenerator {
  generateBeginnerPrayer(scriptureData: ScriptureData): string;
  generateAdvancedPrayer(scriptureData: ScriptureData): string;
  applyTemplates(keywords: string[], type: 'beginner' | 'advanced'): string;
}
```

### 7.3 저장소 구조
```
src/
  ├── components/
  │   ├── input/
  │   ├── analysis/
  │   └── output/
  ├── services/
  │   ├── textProcessor.ts
  │   └── prayerGenerator.ts
  ├── hooks/
  │   └── useScriptureAnalysis.ts
  └── contexts/
      └── ScriptureContext.ts
```

## 8. 테스트 계획

### 8.1 단위 테스트
- 텍스트 처리 유닛 테스트
- 기도문 생성 로직 테스트
- UI 컴포넌트 테스트

### 8.2 통합 테스트
- 파일 업로드 → 분석 → 출력 흐름
- 텍스트 입력 → 분석 → 출력 흐름

### 8.3 성능 테스트
- 대용량 텍스트 처리 성능
- 렌더링 성능
- 메모리 사용량

## 9. 배포 계획
- Vercel 플랫폼 활용
- CI/CD 파이프라인 구성
- 모니터링 시스템 구축
