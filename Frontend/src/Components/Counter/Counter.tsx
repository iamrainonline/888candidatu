import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {count}
      <div className="flex justify-center items-center gap-10">
        <button onClick={() => setCount(count + 1)}>Click to +</button>
        <button onClick={() => setCount(count - 1)}>Click to -</button>
      </div>
    </div>
  );
};

export default Counter;
