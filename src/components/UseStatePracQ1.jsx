// realtime user input
import React, { useState } from 'react'

export default function UseStatePracticeQ1() {
    const[input,setInput] = useState("")

    function inputData(e){
        setInput(e.target.value)
    }
  return (
    <div>
        <input type="text" name="name" placeholder='Enter' onChange={inputData}/>
        <h1>{input}</h1>
    </div>
  )
}
