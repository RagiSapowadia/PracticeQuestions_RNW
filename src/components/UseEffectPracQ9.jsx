// Countdown Timer with Cleanup: Use useEffect to decrease time every second and stop at 0.
import React, { useEffect, useState } from 'react'

export default function UseEffectPracQ9() {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        let intervalId = setInterval(() => {

            if (timer > 0) {
                setTimer(prevTimer => prevTimer - 1);
            }
            else {
                return 0
            }

        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    },[timer])

    return (
        <div>
            {timer > 0 ? <h1>Time left: {timer}</h1 >:<h1> Time is up!</h1>}
        </div>
    )
}
