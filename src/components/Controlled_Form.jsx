import React, { useState } from 'react'

export default function Controlled_Form() {
    const [state,setState] = useState("")
    const [text,setText] = useState([])

    function addText(e){
        setState(e.target.value)
    }
    function submitForm(e){
        e.preventDefault()
        setText([...text,state])
    }

  return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text" value={state} onChange={addText} />
            <input type="submit"/>
        </form>
        {
            text.map((el,i)=>{
                return <li>{el}</li>
            })
        }
    </div>
  )
}
