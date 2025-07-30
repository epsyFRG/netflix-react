import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const NetflixNavbar = ({ onSearchClick }) => (
  <Navbar bg="black" variant="dark" expand="lg" sticky="top">
    <Container fluid>
      <Navbar.Brand href="#">
        <img
          src="Netflix-assets/assets/netflix_logo.png"
          alt="Netflix Logo"
          height="32"
          className="img-hover-zoom"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="netflix-navbar-nav" />
      <Navbar.Collapse id="netflix-navbar-nav">
        <Nav className="me-auto align-items-lg-center">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/tv-shows">
            TV Shows
          </Link>
          <Link className="nav-link" to="/" active>
            Movies
          </Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <Nav className="align-items-lg-center ms-auto gap-3">
          <Nav.Link
            href="#"
            className="text-secondary"
            onClick={(e) => {
              e.preventDefault()
              onSearchClick && onSearchClick()
            }}
          ></Nav.Link>
          <span className="text-uppercase small d-none d-lg-inline">Kids</span>
          <Nav.Link href="#" className="text-secondary">
            <i className="bi bi-bell"></i>
          </Nav.Link>
          <NavDropdown
            title={
              <img
                src="Netflix-assets/assets/avatar.png"
                alt="Profile"
                className="rounded img-hover-zoom"
                width="32"
                height="32"
              />
            }
            id="profileDropdown"
            align="end"
            menuVariant="dark"
            className="dropdown-black"
          >
            <NavDropdown.Item
              href="homepage.html"
              className="border-bottom border-danger"
            >
              Home
            </NavDropdown.Item>
            <NavDropdown.Item href="profile.html">Profile</NavDropdown.Item>
            <NavDropdown.Item href="settings.html">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NetflixNavbar
