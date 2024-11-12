import React from "react";
import { useState } from "react";
import "./App.css";
import "../main.css";
import NavBar from "./NavBar";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Models from "../pages/Models";
import SablePalm from "../pages/models/SablePalm";
import SablePalmPlus from "../pages/models/SablePalmPlus";
import BambooPalm from "../pages/models/BambooPalm";
import The1350 from "../pages/models/The1350";
import TheDuplex from "../pages/models/TheDuplex";

function App() {
  return (
    <HashRouter>
      <div style={{ fontFamily: "var(--font-primary)" }}>
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/sable-palm" element={<SablePalm />} />
            <Route path="/models/sable-palm-plus" element={<SablePalmPlus />} />
            <Route path="/models/bamboo-palm" element={<BambooPalm />} />
            <Route path="/models/the1350" element={<The1350 />} />
            <Route path="/models/theduplex" element={<TheDuplex />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
