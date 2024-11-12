import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PageAdom from "./PageA.tsx";
import PageBdom from "./PageB.tsx";
import PageCdom from "./PageC.tsx";

export default function Customize() {
  return (
    <>
      <Router>
        <div>
          <h1>路由练习</h1>
          <Link to="/PageA" className="link">
            DageA
          </Link>
          |
          <Link to="/PageB" className="link">
            DageB
          </Link>
        </div>

        <Routes>
          <Route path="/PageA" element={<PageAdom />} />
          <Route path="/PageB" element={<PageBdom />}>
            <Route path="PageC" element={<PageCdom />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
