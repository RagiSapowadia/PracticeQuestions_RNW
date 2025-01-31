// Log Input Changes: Use useEffect to log the entered value to the console every time it changes.

import React, { use, useEffect,useState } from 'react'

export default function UseEffectPracQ8() {
    const[data,setData] = useState("")

    useEffect(()=>{
        console.log(data)
    }) // no [] as the data need to be updated on both mount and update phase and [] is only used for mount phase

   
  return (
    <div>
        <input type="text" placeholder='Enter text' onChange={(e) => setData(e.target.value)} />
    </div>
  )
}
