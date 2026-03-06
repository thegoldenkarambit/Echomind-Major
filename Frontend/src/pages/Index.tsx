import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen grid-bg relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mb-6">
          <span className="text-foreground">Compare AI Responses</span>
          <br />
          <span className="neon-text">Discover</span>
          <span className="text-foreground"> the </span>
          <span className="neon-text-blue">Best Answer</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Paste a prompt and instantly compare responses from multiple AI models side-by-side.
          Analyze quality, depth, and accuracy in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <Link
            to="/compare"
            className="glow-button px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-widest uppercase"
          >
            Start Comparing
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-widest uppercase neon-border text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            Learn More
          </Link>

        </div>
      </main>
    </div>
  );
};

export default Index;