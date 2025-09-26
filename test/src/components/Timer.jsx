/*import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start an interval that updates every second
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []); // run only once when component mounts

  return (
    <div style={styles.container}>
      <h2>🔵 useEffect Example</h2>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #28a745",
    borderRadius: "8px",
  },
};

export default Timer;

*/
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);      // ⏱️ Time counter
  const [isRunning, setIsRunning] = useState(true); // ▶️/⏸️ Timer status

  useEffect(() => {
    let timer;

    if (isRunning) {
      // Start an interval that runs every 1 second
      timer = setInterval(() => {
        // Use functional update to ensure latest value
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup: clear interval when component unmounts
    // or when isRunning changes (pause/resume)
    return () => clearInterval(timer);
  }, [isRunning]); // Depend on isRunning to pause/resume

  return (
    <div style={styles.container}>
      <h2>🔵 useEffect Timer</h2>
      <p>Elapsed Time: {seconds} seconds</p>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause ⏸️" : "Resume ▶️"}
      </button>

      <button onClick={() => setSeconds(0)} style={styles.reset}>
        Reset 🔄
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #28a745",
    borderRadius: "8px",
    marginTop: "20px",
  },
  reset: {
    marginLeft: "10px",
    backgroundColor: "#f04d4d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Timer;

