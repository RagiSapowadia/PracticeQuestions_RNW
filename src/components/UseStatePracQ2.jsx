// toggle visiblity of paragraph on click
import React,{useState} from 'react'

export default function UseStatePracQ2() {
    const[isVisible,setIsVisible] = useState(true)

    function show(){
        setIsVisible((prevState)=> !prevState)
    }
  return (
      <div>
        <button onClick={show}>Click</button>
        {isVisible && <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore in voluptates nostrum quia rerum ipsa quibusdam consectetur commodi itaque quod qui repudiandae, illum tempora? Magnam atque nulla quisquam repudiandae?</h1>}
    </div>
  )
}
