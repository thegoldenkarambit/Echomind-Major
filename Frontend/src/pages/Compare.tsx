import { useState } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import PromptInput from "@/components/PromptInput";
import ResponsePanel from "@/components/ResponsePanel";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";

const mockResponses = {
  a: {
    model: "Model A",
    text: "Artificial Intelligence represents a transformative paradigm shift in computational capabilities. Through sophisticated neural network architectures and deep learning algorithms, AI systems can now process vast amounts of unstructured data, identify complex patterns, and generate insights that were previously impossible for traditional computing methods. The implications span across healthcare, finance, autonomous systems, and creative industries, fundamentally reshaping how we approach problem-solving and decision-making in the modern era.",
    score: 87,
    wordCount: 62,
    readability: 72,
  },
  b: {
    model: "Model B",
    text: "AI is the simulation of human intelligence by machines. It includes learning from data, reasoning through problems, and self-correction. Key areas include machine learning, natural language processing, and computer vision. AI is used in virtual assistants, recommendation systems, medical diagnosis, and self-driving cars. While powerful, AI raises important questions about ethics, bias, job displacement, and the need for responsible development practices to ensure beneficial outcomes for society.",
    score: 74,
    wordCount: 65,
    readability: 85,
  },
};

const Compare = () => {
  const [prompt, setPrompt] = useState("");
  const [hasCompared, setHasCompared] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCompare = () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setHasCompared(true);
      setIsLoading(false);
    }, 1500);
  };

  const bestModel = mockResponses.a.score >= mockResponses.b.score ? "a" : "b";

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <ResponsePanel
                model={mockResponses.a.model}
                text={mockResponses.a.text}
                score={mockResponses.a.score}
                isBest={bestModel === "a"}
              />
              <ResponsePanel
                model={mockResponses.b.model}
                text={mockResponses.b.text}
                score={mockResponses.b.score}
                isBest={bestModel === "b"}
              />
            </div>

            <AnalyticsDashboard
              modelA={mockResponses.a}
              modelB={mockResponses.b}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Compare;
