import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
