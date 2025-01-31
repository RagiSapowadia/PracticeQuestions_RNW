import React, { useState, useEffect } from 'react';

export default function UseEffectPracQ3() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); 

  useEffect(() => {
    console.log("Counter updated"); 
  }, [count,text]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
    </div>
  );
}
