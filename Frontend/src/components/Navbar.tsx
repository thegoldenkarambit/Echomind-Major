import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 holographic-panel border-t-0 border-x-0">
      <Link to="/" className="flex items-center gap-2">
        <BrainCircuit className="w-8 h-8 neon-text text-primary" />
        <span className="font-display text-xl font-bold neon-text tracking-wider">EchoMind</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="font-body text-foreground/80 hover:text-foreground transition-colors tracking-wide">
          Home
        </Link>
        <Link
          to="/compare"
          className="glow-button px-5 py-2 rounded-md font-display text-sm font-semibold tracking-wider">
          
          Try Now
        </Link>
      </div>
    </nav>);

};

export default Navbar;