import React, { useEffect } from 'react'

export default function UseEffectPracQ1() {
    useEffect(()=>{
        console.log("Component is mounted");
    },[]);
  return (
    <div>
    </div>
  )
}
