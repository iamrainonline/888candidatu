import { useState, useEffect } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: number;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // curățare când se oprește sau se schimbă `running`
  }, [running]);

  return (
    <div>
      <div>{time}</div>
      <button onClick={() => setRunning((prev) => !prev)}>
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Counter;
