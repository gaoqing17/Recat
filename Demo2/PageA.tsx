import React from "react";
import { Route, Link, useNavigate } from "react-router-dom";
import Customize from "./Customize.tsx";

function DageA() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h2>MyPageA</h2>
        <Link to="/">返回首页</Link>
        <br />
        <button onClick={() => navigate(-1)}>返回上一页</button>
        <button onClick={() => navigate(1)}>返回下一页</button>
      </div>
      {/* <Route path="/" element={<Customize />} /> */}
    </>
  );
}

export default DageA;
