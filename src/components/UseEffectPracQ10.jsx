// timer with pause button and resume again
import React, { useEffect, useState } from 'react'

export default function UseEffectPracQ10() {
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    var intervalId;
    useEffect(() => {
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1)
            }, 1000);
        }
            return () => clearInterval(intervalId);
    },[isRunning])

    return (
        <div>
            <h1>{timer}</h1>

            <button onClick={() => { setIsRunning(true) }}>Start</button>
            <button onClick={()=>{setIsRunning(false)}}>Pause</button>
            <button onClick={()=>{setIsRunning(true)}}>Resume</button>
            <button onClick={()=>{setTimer(0)}}>Restart</button>
            <button onClick={()=>{setTimer(0) && setIsRunning(false)}}>Clear</button>
        </div>
    )
}
