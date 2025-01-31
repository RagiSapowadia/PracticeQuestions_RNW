// toggle text on check and uncheck button
import React, {useState} from 'react'

export default function UseStatePracQ3() {
    const[checkState, setCheckState] = useState(true)

    function CheckState(){
        const newState = !checkState
        setCheckState(newState);
    }
  return (
    <div>
        <input type="checkbox"  checked={checkState} onChange={CheckState}/>
        <label>{checkState ? 'Checked' : 'Unchecked'}</label>
    </div>
  )
}
