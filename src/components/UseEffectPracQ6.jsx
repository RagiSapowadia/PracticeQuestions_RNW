// Automatic Counter Reset: When the counter reaches 10, reset it to 0 using useEffect.

import React, { useEffect, useState } from 'react'

export default function UseEffectPracQ6() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevState => {
                if (prevState >= 10) {
                    return 0; // Reset to 0
                }
                return prevState + 1; // Increment count
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Empty dependency array to run only once


    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
