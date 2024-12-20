import { ScriptureInput } from "@/components/input/ScriptureInput";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-8">말씀기도 (WordPrayer)</h1>
      <ScriptureInput />
    </main>
  );
}
