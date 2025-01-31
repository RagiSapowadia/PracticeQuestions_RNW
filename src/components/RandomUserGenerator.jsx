import React, { useEffect, useState } from 'react'

export default function RandomUserGenerator() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        image: ""
    })

    useEffect(() => {
        fetchApi()
    }, [])
    function fetchApi() {
        fetch('https://randomuser.me/api')
            .then((res) => { return res.json() })
            .then((data) => {
                setState({
                    name: data.results[0].name.first,
                    gender: data.results[0].gender,
                    image: data.results[0].picture.large
                })
            })
    }

    return (
        <div>
            <h1>Card</h1>
            <img src={state.image} />
            <p>{state.name}</p>
            <p>{state.gender}</p>
            {/* <button onClick={() => { setState("Ragi") }}>User</button> */} 
            <button onClick={fetchApi}>Fetch User</button>
        </div>
    )
}
