import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  return (
    <div className="min-h-screen grid-bg relative">

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20 px-4 md:px-8 max-w-6xl mx-auto">

        <h1 className="font-display text-4xl md:text-5xl neon-text text-center mb-12 tracking-wider">
          About EchoMind
        </h1>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section className="glass-card p-8">
            <h2 className="text-2xl neon-text mb-4">What is EchoMind?</h2>

            <p>
              EchoMind is a multi-model AI comparison platform that allows users
              to evaluate responses from multiple large language models simultaneously.
              Instead of relying on a single AI model, EchoMind queries several models
              and evaluates their responses using a set of quality metrics.
            </p>

            <p className="mt-4">
              The goal is to determine which AI system produces the most accurate,
              coherent, and relevant response for a given prompt.
            </p>
          </section>


          <section className="glass-card p-8">
            <h2 className="text-2xl neon-text mb-4">How It Works</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>User submits a prompt.</li>
              <li>Backend sends the prompt to multiple AI models.</li>
              <li>Each response is analyzed using evaluation metrics.</li>
              <li>The best performing model is identified automatically.</li>
            </ul>
          </section>


          <section className="glass-card p-8">
            <h2 className="text-2xl neon-text mb-4">Evaluation Metrics</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Relevance to prompt</li>
              <li>Semantic depth</li>
              <li>Response structure</li>
              <li>Readability</li>
              <li>Coherence</li>
            </ul>
          </section>


          <section className="glass-card p-8">
            <h2 className="text-2xl neon-text mb-4">Research Work</h2>

            <p>
              EchoMind is part of an ongoing research effort focused on evaluating
              the comparative performance of modern Large Language Models.
            </p>

            <p className="mt-4">
              A review paper based on the architecture and design of EchoMind
              has been published, and a full research paper detailing the
              evaluation methodology is currently in progress.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="/papers/review-paper.pdf"
                target="_blank"
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
              >
                View Review Paper
              </a>

              <a
                href="/papers/research-paper.pdf"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500/20 transition"
              >
                Research Paper (In Progress)
              </a>

            </div>
          </section>

        </div>

      </main>

    </div>
  );
};

export default About;