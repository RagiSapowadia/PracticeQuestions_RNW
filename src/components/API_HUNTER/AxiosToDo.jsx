import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState([]);
  const [edit, setEdit] = useState(null);

  // Fetch data from API
  function fetchData() {
    axios
      .get('http://localhost:3007/demoData')
      .then((res) => setDisplay(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  
    const newData = { name, email };  
  
    if (edit) {
      axios
        .put(`http://localhost:3007/demoData/${edit}`, newData)
        .then(() => {
          setEdit(null); 
          setName('');
          setEmail('');
          fetchData();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post('http://localhost:3007/demoData', newData)
        .then(() => {
          setName('');
          setEmail('');
          fetchData();
        })
        .catch((error) => console.log(error));
    }
  }
  
  function handleDelete(id) {
    axios
      .delete(`http://localhost:3007/demoData/${id}`)
      .then(() => fetchData())
      .catch((error) => console.log(error));
  }
  

  function handleEdit(data) {
    setName(data.name);
    setEmail(data.email);
    setEdit(data.id);
  }

  return (
    <div>
      <h2>{edit ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{edit ? 'Update' : 'Add'}</button>
      </form>

      <h3>User List</h3>
      <ul>
        {display.map((e) => (
          <li key={e.id}>
            {/* {e.name} ({e.email}) */}
            <li>{e.name}</li>
            <li>{e.email}</li>
            <button onClick={() => handleEdit(e)}>Edit</button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
