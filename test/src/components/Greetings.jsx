import { useState } from "react";

function Greeting({ name }) {       // name is a prop
  const [count, setCount] = useState(0); // count is state
  return (
    <div>
      <p>Hello {name}, you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Greeting