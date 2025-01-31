import React, { useState, useEffect } from 'react';

export default function ExplainingUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🟢 Mounted");
  }, []); // Runs only once (Mounting Phase)

  useEffect(() => {
    console.log("🔄 Updated");
  }); // Runs on every render (Mounting + Updating)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
