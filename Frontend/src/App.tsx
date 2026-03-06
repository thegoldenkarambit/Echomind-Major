import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Compare from "./pages/Compare";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Index />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;