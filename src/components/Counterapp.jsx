import React, { useState } from 'react'

export default function Counterapp() {
    const [state, setState] = useState(0)

    function Inc(){
        setState((prevState)=>prevState+1)  //async function - setState()
        setState((prevState)=>prevState+2)
        setState((prevState)=>prevState+3)

        // setState(state+1)
    }
  return (
    <div>
        <h1>Counter is {state}</h1>
        <button onClick={Inc}>Click</button>
    </div>
  )
}
