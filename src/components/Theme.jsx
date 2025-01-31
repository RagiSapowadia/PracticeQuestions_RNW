import React,{useState} from 'react';

export default function Bgcolorbutton() {

    const [state, setState] = useState(false);

  return (
    <div style={{background:state?'black' : 'white',color: state?'white':'black',height:'100vh'}}>
      <button onClick={()=>setState(!state)}>Change Background</button>
      <div>{state}</div>
    </div>
  )
}