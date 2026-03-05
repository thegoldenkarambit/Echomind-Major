import { Crown } from "lucide-react";

interface ResponsePanelProps {
  model: string;
  text: string;
  score: number;
  isBest: boolean;
}

const ResponsePanel = ({ model, text, score, isBest }: ResponsePanelProps) => {
  return (
    <div className={`holographic-panel rounded-xl p-6 relative ${isBest ? "neon-border-green" : "neon-border"}`}>
      {isBest && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-background px-3 py-1 rounded-full border border-[hsl(150,100%,50%,0.6)] text-[hsl(150,100%,50%)]">
          <Crown className="w-3 h-3" />
          <span className="font-display text-[10px] tracking-widest uppercase">Best Response</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-bold tracking-wider neon-text">{model}</h3>
        <div className="score-badge rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="font-display text-lg font-bold neon-text">{score}%</span>
          <span className="font-body text-xs text-muted-foreground tracking-wide">AI Score</span>
        </div>
      </div>

      <p className="font-body text-foreground/80 leading-relaxed text-sm">{text}</p>
    </div>
  );
};

export default ResponsePanel;
