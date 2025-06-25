import "./App.css";

// 1 - CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// COMPONENTS
import NavBar from "./components/NavBar";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./pages/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - LINKS COM O LINK ROUTER*/}
        <NavBar />
        {/* 9 - SEARCH*/}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 -  NESTED ROUTE*/}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 -  ROTA DINÂMICA*/}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - SEARCH*/}
          <Route path="/search" element={<Search />} />
          {/* 10 - REDIRECT*/}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - NO MATCH ROUTE*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
