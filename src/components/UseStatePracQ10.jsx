import React, { useState } from 'react'

export default function UseStatePracQ10() {
    const[color,setColor] = useState("white")

    function setBg(e){
        // if(e.target.id == 'red'){
        //     setColor('red')
        // }
        // else if(e.target.id == 'green'){
        //     setColor('green')
        // }
        // else if(e.target.id == 'blue'){
        //     setColor('blue')
        // }

       return (e.target.id == 'red') ? setColor('red') : (e.target.id == 'green') ? setColor('green') : (e.target.id == 'blue') ? setColor('blue') : null
    }

  return (
    <div style={{background:color}}>
        <button onClick={setBg} id='red'>Red</button>
        <button onClick={setBg} id='green'>Green</button>
        <button onClick={setBg} id='blue'>Blue</button>
    </div>
  )
}
