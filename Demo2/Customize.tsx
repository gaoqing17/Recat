import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import DageAdom from "./DageA.tsx";
import DageBdom from "./DageB.tsx";
import DageCdom from "./DageC.tsx";

export default function Customize() {
  return (
    <>
      <h1>路由练习</h1>
      <Link to="/DageA" className="link">
        DageA
      </Link>
      |
      <Link to="/DageB" className="link">
        DageB
      </Link>
      <Routes>
        <Route path="/DageA" Component={DageAdom} />
        <Route path="/DageB" Component={DageBdom} />
        <Route path="/DageC" Component={DageCdom} />
      </Routes>
    </>
  );
}
