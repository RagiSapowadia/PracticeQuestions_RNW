// add text and display
import React, { useState } from 'react'

export default function UseStatePracQ4() {
    const[text, addText] = useState()
    const[textList, addList] = useState([])
    function addData(e){
        // addText(e.target.value)
        addList([...textList,text])
        addText("")
        // console.log(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Enter items' value={text}  onChange={(e) => addText(e.target.value)}/>
      <button onClick={addData}>Add</button>

      {textList.map((el, i) => (
        <li>{el}   - id: {i}</li>
      ))}
    </div>
  )
}
