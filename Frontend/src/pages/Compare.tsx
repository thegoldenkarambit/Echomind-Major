import { useState } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import PromptInput from "@/components/PromptInput";
import ResponsePanel from "@/components/ResponsePanel";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

function cleanText(text: string) {

  if (!text) return "";

  return text
    .replace(/<think>[\s\S]*?<\/think>/g, "")
    .replace(/\*\*/g, "")
    .replace(/#+/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

function truncate(text: string, max = 7000) {
  if (text.length <= max) return text;
  return text.substring(0, max) + "...";
}

function readability(text: string) {

  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]/).length;

  return Math.max(30, Math.min(100, Math.round((words / sentences) * 6)));
}

function relevance(prompt: string, text: string) {

  const promptWords = new Set(prompt.toLowerCase().split(" "));
  const textWords = new Set(text.toLowerCase().split(" "));

  let match = 0;

  promptWords.forEach(w => {
    if (textWords.has(w)) match++;
  });

  return Math.round((match / promptWords.size) * 100);
}

function structure(text: string) {

  let score = 50;

  if (text.includes(":")) score += 10;
  if (text.includes("1.") || text.includes("-")) score += 20;
  if (text.length > 300) score += 10;

  return Math.min(100, score);
}

function depth(text: string) {

  const words = text.split(/\s+/);
  const unique = new Set(words);

  return Math.min(100, Math.round((unique.size / words.length) * 120));
}

function coherence(text: string) {

  const words = text.split(/\s+/);
  const unique = new Set(words);

  return Math.round((unique.size / words.length) * 100);
}

function finalScore(metrics: any) {

  return Math.round(
    metrics.relevance * 0.35 +
    metrics.depth * 0.25 +
    metrics.readability * 0.20 +
    metrics.structure * 0.20
  );
}

const Compare = () => {

  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState<any[]>([]);
  const [bestModel, setBestModel] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCompared, setHasCompared] = useState(false);

  const handleCompare = async () => {

    if (!prompt.trim()) return;

    setIsLoading(true);

    const res = await fetch("http://127.0.0.1:8000/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    const models = Object.entries(data.responses);

    const processed = models.map(([name, text]: any) => {

      const cleaned = cleanText(text);

      const metrics = {
        readability: readability(cleaned),
        relevance: relevance(prompt, cleaned),
        structure: structure(cleaned),
        depth: depth(cleaned),
        coherence: coherence(cleaned)
      };

      return {
        model: name,
        fullText: cleaned,
        text: truncate(cleaned),
        ...metrics,
        score: finalScore(metrics)
      };

    });

    let best = processed[0];

    processed.forEach(r => {
      if (r.score > best.score) best = r;
    });

    setBestModel(best);
    setResponses(processed);

    setHasCompared(true);
    setIsLoading(false);
  };

  return (

    <div className="min-h-screen grid-bg relative">

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">

        <h2 className="font-display text-2xl md:text-3xl font-bold neon-text text-center mb-8 tracking-wider">
          AI Comparison Console
        </h2>

        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          onCompare={handleCompare}
          isLoading={isLoading}
        />

        {hasCompared && (

          <div className="animate-fade-in">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

              {responses.map((r, i) => (

                <ResponsePanel
                  key={i}
                  model={r.model}
                  text={r.text}
                  score={r.score}
                  isBest={bestModel?.model === r.model}
                />

              ))}

            </div>

            {bestModel && (

              <AnalyticsDashboard
                bestModel={bestModel}
                models={responses}
              />

            )}

          </div>

        )}

      </main>

    </div>

  );
};

export default Compare;