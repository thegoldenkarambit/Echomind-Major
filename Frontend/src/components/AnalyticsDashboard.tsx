import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ModelData {
  model: string;
  score: number;
  wordCount: number;
  readability: number;
}

interface AnalyticsDashboardProps {
  modelA: ModelData;
  modelB: ModelData;
}

const AnalyticsDashboard = ({ modelA, modelB }: AnalyticsDashboardProps) => {
  const similarity = 68;

  const radarData = [
    { metric: "Accuracy", A: 88, B: 72 },
    { metric: "Depth", A: 85, B: 68 },
    { metric: "Clarity", A: 78, B: 82 },
    { metric: "Relevance", A: 92, B: 76 },
    { metric: "Creativity", A: 70, B: 65 },
  ];

  const stats = [
    { label: "Word Count A", value: modelA.wordCount },
    { label: "Word Count B", value: modelB.wordCount },
    { label: "Similarity", value: `${similarity}%` },
    { label: "Readability A", value: `${modelA.readability}/100` },
    { label: "Readability B", value: `${modelB.readability}/100` },
  ];

  return (
    <div className="mt-8">
      <h3 className="font-display text-xl font-bold neon-text-blue text-center mb-6 tracking-wider">
        Analysis Dashboard
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stats Grid */}
        <div className="holographic-panel rounded-xl p-6 neon-border">
          <h4 className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Metrics Overview
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-background/40 rounded-lg p-3 neon-border">
                <div className="font-body text-xs text-muted-foreground tracking-wide">{s.label}</div>
                <div className="font-display text-lg font-bold neon-text mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="holographic-panel rounded-xl p-6 neon-border">
          <h4 className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Quality Comparison
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(190, 60%, 20%)" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "hsl(190, 100%, 70%)", fontSize: 11, fontFamily: "Rajdhani" }}
              />
              <PolarRadiusAxis tick={false} axisLine={false} />
              <Radar
                name="Model A"
                dataKey="A"
                stroke="hsl(190, 100%, 50%)"
                fill="hsl(190, 100%, 50%)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Model B"
                dataKey="B"
                stroke="hsl(280, 80%, 60%)"
                fill="hsl(280, 80%, 60%)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(190,100%,50%)]" />
              <span className="font-body text-xs text-muted-foreground">Model A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(280,80%,60%)]" />
              <span className="font-body text-xs text-muted-foreground">Model B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
