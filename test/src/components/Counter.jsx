import React, { useState } from "react";

function Counter() {
  // state variable + setter
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign:"center", padding:"20px", border:"2px solid #007bff", borderRadius:"8px", marginBottom:"20px"}}>
      <h2>🟢 useState Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
