import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { app } from "../firebase";

const database = getDatabase(app);

export default function DashBoard() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  // Fetch    
  useEffect(() => {
    const taskRef = ref(database, "task/");

    onValue(taskRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const taskArray = Object.entries(data).map(([key, value]) => ({
          id: key,  
          ...value,
        }));
        setTasks(taskArray);
      } else {
        setTasks([]);  
      }
    });
  }, []);

  // Add Task  
  const addTask = (e) => {
    e.preventDefault();

    if (!taskName) {
      alert("Please enter a task!");
      return;
    }

    const newTaskRef = push(ref(database, "task/"));
    set(newTaskRef, { taskName })
      .then(() => setTaskName(""))  
      .catch((error) => console.error("Error adding task:", error));
  };

  // Delete  
  const deleteTask = (taskId) => {
    remove(ref(database, `task/${taskId}`))
      .then(() => console.log("Task deleted"))
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div>
      <form className="w-25 mx-auto border m-4 p-4" onSubmit={addTask}>
        <h2>TODO - DashBoard</h2>
        <div className="form-group border rounded-pill bg-light d-flex">
          <input
            type="text"
            className="form-control rounded-pill border-0 bg-light"
            placeholder="Add Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button className="rounded-pill btn ms-1 btn-light">Add</button>
        </div>
      </form>

  
      <ul className="list-group w-50 mx-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task.taskName}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
