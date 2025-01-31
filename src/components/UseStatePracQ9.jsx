// dependent states 
import React, { useState } from 'react'

export default function UseStatePracQ9() {
    const[city,SetCity] = useState("Ahmedabad")
    // const [country, SetCountry] = useState("India");
    function setCity(e){
        const selectedCountry = e.target.value;
        // SetCountry(selectedCountry); 
    
        if (selectedCountry === "India") {
          SetCity("Ahmedabad");
        } else if (selectedCountry === "China") {
          SetCity("Shanghai");
        } else if (selectedCountry === "USA") {
          SetCity("New York");
        }
    }
  return (
    <div>
        <select  onChange={setCity}>
            <option value="India" selected>India</option>
            <option value="China">China</option>
            <option value="USA">USA</option>
        </select>

        <select value={city}>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Shanghai">Shanghai</option>
        <option value="New York">New York</option>
        </select>

    </div>
  )
}
