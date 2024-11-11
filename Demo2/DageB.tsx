import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import List from "./List.tsx";
import DageCdom from "./DageC.tsx";

function DageB() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>MyPageB</h1>
        <List>
          <li>
            <Link to="/DageC/value-from-url-params">通过 URL 参数传递</Link>
          </li>
          <li>
            <Link to="/DageC?searchParam=value-from-search-params">
              通过 Query 参数传递
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                navigate("/DageC", { state: { value: "value-from-state" } })
              }
            >
              通过 State 传递
            </button>
          </li>
        </List>
      </div>
    </>
  );
}

export default DageB;
