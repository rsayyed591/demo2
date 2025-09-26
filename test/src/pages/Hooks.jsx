import React from "react";
import Counter from "../components/Counter";
import Timer from "../components/Timer";

function Hooks() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Hooks Basics</h1>
      <Counter />
      <Timer />
    </div>
  );
}

export default Hooks;
