import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import List from "./List.tsx";

function DageB() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div>
          <h1>MyPageB</h1>
          <List>
            <li>
              <Link to="PageC/value-from-url-params">通过 URL 参数传递</Link>
            </li>
            <li>
              <Link to="PageC?searchParam=value-from-search-params">
                通过 Query 参数传递
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  navigate("PageC", { state: { value: "value-from-state" } })
                }
              >
                通过 State 传递
              </button>
            </li>
          </List>
          <hr />
          <Outlet />
        </div>
      </motion.div>
    </>
  );
}

export default DageB;
