import { ScriptureInput } from "@/components/input/ScriptureInput";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="max-w-[750px] text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          말씀기도 (WordPrayer)
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          성경 본문을 기반으로 개인화된 기도문을 자동으로 생성하여 더 깊이 있는 기도 생활을 돕습니다.
        </p>
      </div>
      <ScriptureInput />
    </div>
  );
}
