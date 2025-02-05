import React, { useState } from 'react';

export default function Todo() {
    const [name, setName] = useState('');
    const [text, setText] = useState([]);
    const [Age, setAge] = useState(''); // Initial age value as an empty string
    const [age, setage] = useState([]);
    // const [editingIndex, setEditingIndex] = useState(null); 

    function addText(e) {
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else if (e.target.id === 'age') {
            setAge(e.target.value);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        // setage([...age, Age])
        setText([...text, name])
        setName("")
        // setAge("")
    }

    function editData(index) {
        console.log(index)
        const newName = prompt("Enter new name");
        // const newAge = prompt("Enter new age");
        if (newName != null) {
            const updatedText = [...text];
            // const updatedAge = [...age];
            updatedText[index] = newName;
            // updatedAge[index] = newAge;

            setText(updatedText);
            // setage(updatedAge);
        }
    }

    function delData(el) {
        const updatedText = [...text];
        // const updatedAge = [...age];
        updatedText.splice(el, 1);
        // updatedAge.splice(el, 1); 
        setText(updatedText);
        // setAge(updatedAge);
    }
    function delAll() {
        setText([]);
        // setage([]);
    }
    return (
        <div>
            <div className="container mt-5 p-3 border mx-auto">
                <form className="form border p-3 mb-3 col-3 g-2 mx-auto" onSubmit={submitForm}>
                    <h2 className="text-center">To-Do-List</h2>
                    <input
                        className="col-12 my-2"
                        type="text"
                        id="name"
                        placeholder="Enter task"
                        value={name}
                        onChange={addText}
                    />

                    {/* <input
            className="col-12 my-2"
            type="number"
            id="age"
            placeholder="Enter age"
            value={Age}
            onChange={addText}
          /> */}
                    <input
                        className="col-12 my-2 btn btn-light border"
                        type="submit"
                        value="Add Task"
                    // onClick={submitForm}
                    />
                    <input  
                        className="col-12 my-2 btn btn-dark border"
                        onClick={delAll}
                        value="Delete All" />
                </form>
                {text.length > 0 && (
                    <table className="table table-bordered w-75 mx-auto text-center">
                        <thead>
                            <tr>
                                <th scope="col">Task Name</th>
                                <th colSpan="2" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {text.map((el, i) => (
                                <tr key={i}>
                                    <td scope="row" className="col-4 fs-4">{el}</td>
                                    <td className='mx-auto'>
                                        <input
                                            className="my-2 me-3 btn btn-primary border"
                                            type="button"
                                            value="Edit Task"
                                            onClick={() => editData(i)}
                                        />
                                        <input
                                            className="my-2 btn btn-danger border"
                                            type="button"
                                            value="Completed"
                                            onClick={() => delData(i)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
