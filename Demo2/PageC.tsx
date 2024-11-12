import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function DageC() {
  // 方式一：获取 URL Params
  const params = useParams();
  const urlParamValue = params.value || "无 URL 参数";

  // 方式二：获取 Search Params
  const [searchParams] = useSearchParams();
  const searchParamValue = searchParams.get("searchParam") || "无 Query 参数";

  // 方式三：获取 State
  const location = useLocation();
  const stateValue = location.state?.value || "无 State 参数";

  return (
    <div>
      <h2>MyPageC</h2>
      <p>URL 参数: {urlParamValue}</p>
      <p>Query 参数: {searchParamValue}</p>
      <p>State 参数: {stateValue}</p>
    </div>
  );
}

export default DageC;
