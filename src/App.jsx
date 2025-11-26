import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Packages from "./Pages/Packages";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Packages" element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
