import React from "react";

const AnalyticsDashboard = ({ bestModel, models }: any) => {

  return (

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* METRICS OVERVIEW */}

      <div className="glass-card p-6">

        <h3 className="text-xl font-bold neon-text mb-4">
          Metrics Overview
        </h3>

        <p className="text-sm opacity-70 mb-6">
          EchoMind evaluates responses using heuristic scoring based on
          relevance, semantic depth, readability, structure, and coherence.
        </p>

        <div className="space-y-4">

          {models.map((m:any, i:number) => (

            <div key={i} className="border border-cyan-500/20 p-4 rounded-lg">

              <div className="flex justify-between mb-2">

                <span className="font-semibold">
                  {m.model}
                </span>

                {bestModel.model === m.model && (
                  <span className="text-green-400">
                    BEST
                  </span>
                )}

              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">

                <div>Score: {m.score}</div>
                <div>Readability: {m.readability}</div>
                <div>Depth: {m.depth}</div>
                <div>Relevance: {m.relevance}</div>
                <div>Structure: {m.structure}</div>
                <div>Coherence: {m.coherence}</div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BEST MODEL ANALYSIS */}

      <div className="glass-card p-6">

        <h3 className="text-xl font-bold neon-text mb-4">
          Best Model Analysis
        </h3>

        <div className="space-y-2 text-sm">

          <p><b>Model:</b> {bestModel.model}</p>
          <p><b>Score:</b> {bestModel.score}</p>

          <p><b>Relevance:</b> {bestModel.relevance}</p>
          <p><b>Depth:</b> {bestModel.depth}</p>
          <p><b>Readability:</b> {bestModel.readability}</p>
          <p><b>Structure:</b> {bestModel.structure}</p>
          <p><b>Coherence:</b> {bestModel.coherence}</p>

        </div>

      </div>

    </div>

  );
};

export default AnalyticsDashboard;