import React from 'react'
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">Card</Link> 
      <Link to="/todo">Todo</Link>
      <Link to="/controlled_form">Controlled Form</Link>
      <Link to="/categories">Categories</Link>
    </div>
  )
}
