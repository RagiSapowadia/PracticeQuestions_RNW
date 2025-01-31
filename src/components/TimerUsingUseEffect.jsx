import React, { useEffect, useState } from 'react'

export default function TimerUsingUseEffect() {

    const[state,setState] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setState((preState)=>preState + 1)
        },1000)
    },[])
  return (
    <div>
      <h1>{state}</h1>
    </div>
  )
}


// import React, { useEffect, useState } from 'react'

// export default function Timer_using_useEffect() {

//     const[state,setState] = useState({
//         count:0
//     })
//     useEffect(()=>{
    
//         // method-1
//         //    Inc()

//         // method-2     [use dependency as [state.count]]
//         // setInterval(()=>{
//         //     setState({
//         //         count:state.count+1
//         //     })
//         // },2000)
        
//         // method-3   
//         setTimeout(()=>{
//             setState({
//                 count:state.count+1
//             })
//         },1000)
//     })
//   return (
//     <div>
//         <h1>{state.count}</h1>
//     </div>
//   )
// }


