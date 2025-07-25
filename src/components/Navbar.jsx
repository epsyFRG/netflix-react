import React from "react"
import "./Navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Netflix</div>
    <ul className="nav-links">
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>My List</li>
    </ul>
  </nav>
)

export default Navbar
