import React from 'react'
import {Link, Outlet} from "react-router-dom";

export default function Categories() {
  return (
    <div>  
      <h1>categories Page</h1>
      <div>
        <Link to="category1">Electronics</Link>
        <Link to="">Man</Link>
        <Link to="">Woman</Link>
        <Link to="category2">Jewel</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
