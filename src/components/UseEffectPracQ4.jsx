import React, { useEffect, useState } from 'react'

export default function UseEffectPracQ4() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res)=>{return res.json()})
        .then((result) => 
            {
            setName(result.name)
            setEmail(result.email)
        })
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}
