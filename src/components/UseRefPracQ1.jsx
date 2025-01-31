import React,{useRef} from 'react'

export default function UseRefPracQ1() {
    const colorid = useRef(0)
function ChangeColor(){
colorid.current.style.color = "blue"
}
  return (
    <div>
      <h1 ref={colorid} style={{color:"black"}}>UseRef Hook</h1>
        <button onClick={ChangeColor}>Change Color</button>
    </div>
  )
}
