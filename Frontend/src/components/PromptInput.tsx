import { Send, Loader2 } from "lucide-react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (v: string) => void;
  onCompare: () => void;
  isLoading: boolean;
}

const PromptInput = ({ prompt, setPrompt, onCompare, isLoading }: PromptInputProps) => {
  return (
    <div className="holographic-panel rounded-xl p-6">
      <label className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-3 block">
        Enter Your Prompt
      </label>
      <div className="flex flex-col sm:flex-row gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Explain artificial intelligence in simple terms..."
          className="flex-1 bg-background/50 neon-border rounded-lg p-4 font-body text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:border-primary/80 transition-all min-h-[80px]"
          rows={3}
        />
        <button
          onClick={onCompare}
          disabled={isLoading || !prompt.trim()}
          className="glow-button px-6 py-3 rounded-lg font-display text-sm font-semibold tracking-wider flex items-center gap-2 justify-center disabled:opacity-40 disabled:cursor-not-allowed self-end"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {isLoading ? "Analyzing..." : "Compare"}
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
