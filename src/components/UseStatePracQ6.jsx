// multiple states
import React, { useState } from 'react'

export default function UseStatePracQ6() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    function Inc(counter) {

        if (counter == "counter1") {

            setCount1((prevState) => prevState + 1)
        }
        else {

            setCount2((prevState) => prevState + 1)
        }
    }
    function Dec(counter) {
        if (counter == "counter1") {

            setCount1((prevState) => prevState - 1)
        }
        else {

            setCount2((prevState) => prevState - 1)
        }
    }
    return (
        <div>
            <h4>Counter 1</h4>
            <button onClick={() => Dec("counter1")}>-</button> &nbsp;
            <span>{count1}</span> &nbsp;
            <button onClick={() => Inc("counter1")}>+</button>

            <br />
            <br />
            <h4>Counter 2</h4>
            <button onClick={Dec}>-</button> &nbsp;
            <span>{count2}</span> &nbsp;
            <button onClick={Inc}>+</button>

        </div>
    )
}
