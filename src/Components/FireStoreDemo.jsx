import React, { useState, useEffect } from "react";
import { app } from "../Firebase";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore"; 

const db = getFirestore(app);

export default function FireStoreDemo() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch users when component mounts
  useEffect(() => {
    async function fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) { 
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  // Handle form submission
  async function handleData(e) {
    e.preventDefault(); // Prevent page reload
    try {
      const docRef = await addDoc(collection(db, "users"), { name });
      console.log("Document written with ID: ", docRef.id);
      setUsers([...users, { id: docRef.id, name }]); // Update UI
      setName(""); // Clear input
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div>
      <form className="w-50 mx-auto border m-4 p-4" onSubmit={handleData}>
        <h1>Enter Name Form</h1>
        <div className="form-group">
          <label>Enter Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>

      <h2 className="text-center">Users List</h2>
      <ul className="list-group w-50 mx-auto">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
