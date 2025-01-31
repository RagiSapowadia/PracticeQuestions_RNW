// change color on click of color picker
import React,{useState} from 'react'

export default function UseStatePracQ7() {
    const[bgcolor,setColor] = useState("")

  return (
    <div>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
        <p style={{backgroundColor:bgcolor}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ratione vitae similique quisquam praesentium distinctio sit consequatur asperiores amet incidunt.</p>
    </div>
  )
}
