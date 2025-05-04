import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MovieForm() {
    const [movies, setMovies] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        releaseDate: '',
        director: '',
        image: null
    })
    const [editingId, setEditingId] = useState(null)

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8880/api/movies')
            setMovies(response.data)
        } catch (error) {
            console.error('Error fetching movies:', error)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] })
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formDataToSend = new FormData()
        formDataToSend.append('name', formData.name)
        formDataToSend.append('releaseDate', formData.releaseDate)
        formDataToSend.append('director', formData.director)
        if (formData.image) {
            formDataToSend.append('image', formData.image)
        }

        if (editingId) {
            await axios.put(`http://localhost:8880/api/movies/${editingId}`, formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            setEditingId(null)
        } else {
            await axios.post('http://localhost:8880/api/movies', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        }
        fetchMovies()
        setFormData({
            name: '',
            releaseDate: '',
            director: '',
            image: null
        })

    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8880/api/movies/${id}`)
            fetchMovies()
        } catch (error) {
            console.error('Error deleting movie:', error)
        }
    }

    const handleEdit = (movie) => {
        setEditingId(movie._id)
        setFormData({
            name: movie.name,
            releaseDate: movie.releaseDate.split('T')[0],
            director: movie.director,
            image: null
        })
    }

    return (
        <div className="container mt-5 w-50 border p-5">
            <h1>MOVIES</h1>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="mb-3">
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Enter Movie Name" className="form-control" required />
                </div>
                <div className="mb-3">
                    <input type="file" name="image" onChange={handleChange}
                        className="form-control" accept="image/*" />
                </div>
                <div className="mb-3">
                    <input type="date" name="releaseDate" value={formData.releaseDate}
                        onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <input type="text" name="director" value={formData.director} onChange={handleChange}
                        placeholder="Enter Director name" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">
                    {editingId ? 'Update Movie' : 'Add Movie'}
                </button>
                {editingId && (
                    <button type="button" className="btn btn-secondary ms-2"
                        onClick={() => {
                            setEditingId(null)
                            setFormData({
                                name: '',
                                releaseDate: '',
                                director: '',
                                image: null
                            })
                        }}
                    > Cancel </button>
                )}
            </form>

            <div className="row">
                {movies.map((movie) => (
                    <div key={movie._id} className="col-md-4 mb-4">
                        <div className="card">
                            {movie.image && (
                                <img src={`http://localhost:8880/${movie.image}`} className="card-img-top"
                                    alt={movie.name} style={{ height: '200px', objectFit: 'cover' }} />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">
                                    <strong>Director:</strong> {movie.director}<br />
                                    <strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}
                                </p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-secondary" onClick={() => handleEdit(movie)} >
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(movie._id)} >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


// import React, { useState } from 'react';

// function MovieForm() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   const handleToggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleInputChange}
//           placeholder="Add new task"
//         />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleToggleTask(task.id)}
//             />
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//               {task.text}
//             </span>
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieForm;