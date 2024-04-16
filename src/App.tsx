import Home from "./pages/Home";
import About from "./pages/About";
import NotFound404 from "./pages/NotFound404";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
