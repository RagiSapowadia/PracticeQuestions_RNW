// custom interval timer
import React, {  useEffect, useState } from 'react'

export default function UseEffectPracQ11() {
const[timer,setTimer] = useState(0)
const[state,setState] = useState(false)
const[seconds, setSeconds] = useState(0)
    
useEffect(()=>{
    if (state && seconds>=1000) {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, seconds);

        return () => clearInterval(intervalId); 
    }
    },[state,seconds])

   
  return (
    <div>
        <form onSubmit={(e) => {
    e.preventDefault();
    setState(true);
}}>
        <input type="text" placeholder='Enter time interval'
            value={seconds} 
            onChange={(e) => setSeconds(e.target.value)}  
        />
       </form>
        <h1>{timer}</h1>
    </div>
  )
}
