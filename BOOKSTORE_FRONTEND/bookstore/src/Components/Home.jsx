import React, { useState, useEffect } from "react";
import axios from "axios";


function Home() {
  const [book, setBook] = useState({ title: "", author: "", price: "" });
  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editId) {
      await axios.patch(`http://localhost:7687/book/update/${editId}`, book);
      setEditId(null);
    } else {
      await axios.post("http://localhost:7687/book/add", book);
    }
    setBook({ title: "", author: "", price: "" });
    getBooks();
  };

  const getBooks = async () => {
    const res = await axios.get("http://localhost:7687/book/get");
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:7687/book/delete/${id}`);
    getBooks();
  };

  const editBook = (b) => {
    setBook({ title: b.title, author: b.author, price: b.price });
    setEditId(b._id);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">{editId ? "Edit Book" : "Add Book"}</h2>

      <div className="form">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          className="input"
        />
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
          className="input"
        />
        <button onClick={handleSubmit} className="button">
          {editId ? "Update" : "Add"}
        </button>
      </div>


      <h2 className="heading">Book List</h2>
      <div className="list">
        {books.map((b) => (
          <div key={b._id} className="book-card">
            <div>
              <strong>{b.title}</strong> by {b.author} — ₹{b.price}
            </div>
            <div>
              <button onClick={() => editBook(b)} className="edit-btn">Edit</button>
              <button onClick={() => deleteBook(b._id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;