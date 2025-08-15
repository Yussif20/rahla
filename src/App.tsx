import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";

import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <div className="bg-[#313131] min-h-screen">
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/*"
          element={
            <div className="bg-[#313131] px-3 sm:px-8 min-h-screen">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
