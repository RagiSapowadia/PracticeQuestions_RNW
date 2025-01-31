import React, { useState } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch';
import Counterapp from './components/Counterapp';
import DisplayProduct from './components/DisplayProduct';
import Random_User_Generator from './components/RandomUserGenerator';
import Timer_using_useEffect from './components/TimerUsingUseEffect';
import Timer_using_useRef from './components/TimerUsingUseRef';
import Controlled_Form from './components/Controlled_Form';
import Todo from './components/Todo';

// import Header from './components/Header';

function App() {
  const [state, setState] = useState(false);
  return (
    <div style={{background:state?'black' : 'white',color: state?'white':'black',height:'100vh'}}>
       {/* <button onClick={()=>setState(!state)}>Change Background</button> */}
       <div>{state}</div>
      {/* <DisplayProduct/> */}
      {/* <Counterapp/> */}
      {/* <ApiFetch/> */}
      {/* <Theme/> */}
      {/* <Random_User_Generator/> */}
      {/* <Timer_using_useEffect/> */}
      {/* <Timer_using_useRef/>
      <Controlled_Form/> */}
      <Todo/>
    </div>
  );
}

export default App;



