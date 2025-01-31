// Title Updater: Update the browser tab’s title (document.title) to show the current count value whenever the counter changes.
import React, { useState, useEffect } from 'react'

export default function UseEffectPracQues7() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count - ${count}`;
    }, [count]); // Runs only when `count` updates
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevState) => prevState + 1);
        }, 1000);
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Runs only once when component mounts
    

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}
