// validate form
import React, { useState } from 'react';

export default function UseStatePracQ5() {
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(""); 

  function submitForm(e) {
    e.preventDefault();

    if (name && age) {
      alert("Form is valid!");
    } else {
      alert("Form is not valid");
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <br />
        <input
          type="text"
          placeholder="Enter age"
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
