 import React, {useState, useRef} from 'react'

export default function TimerUsingUseRef() {
    const [time, setTime] = useState(0);
    const id = useRef(null);
    function Start(){
        id.current = setInterval(()=>{
            setTime((prevState)=>prevState+1)
        },1000)
    }
    function Stop(){
        clearInterval(id.current)
    }
  return (
    <div>
      <p>{time}</p>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
  )
}
