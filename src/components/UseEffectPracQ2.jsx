import React,{useState, useEffect} from 'react'

export default function UseEffectPracQ2() {
  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Component Rendered"); 
    }); //if no dependency means it will be rendered (can cause infinite loop) if [] means no changes in update phase and [count] means useEffect will be render in update phase also
  function updateNum(){
    setCount(count + 1)
  }
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={updateNum}>Increment</button>
      </div>
    );
}
