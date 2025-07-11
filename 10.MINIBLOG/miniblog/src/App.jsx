import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//HOOKS
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//CONTEXT
import { AuthProvider } from "./context/AuthContext";

//PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";

// loading
import { OrbitProgress } from "react-loading-indicators";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <OrbitProgress color="#32cd32" size="high" text="" textColor="" />;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/posts/create"
              element={user ? <CreatePost /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
