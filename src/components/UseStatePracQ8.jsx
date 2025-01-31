import React, { useState } from 'react'

export default function UseStatePracQ8() {
    const[color,setColor] = useState('red')
// true = 'red'      false = 'green'
    function changeColor(){
        
        const newColor = color == 'red' ? 'green' : 'red';
        setColor(newColor)
    }
  return (
    <div>
      <p style={{color:color}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, cumque.</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
