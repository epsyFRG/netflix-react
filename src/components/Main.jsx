import React from "react"
import MovieGallery from "./MovieGallery"

const Main = () => (
  <main>
    <div className="container-fluid mt-4">
      <div className="d-flex align-items-center mb-2">
        <h2 className="me-3 mb-0 fw-bold">Movies</h2>
        <div className="dropdown">
          <button
            className="btn btn-dark border-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <ul className="dropdown-menu bg-dark border-secondary">
            <li>
              <a className="dropdown-item text-white" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item text-white" href="#">
                Comedy
              </a>
            </li>
            <li>
              <a className="dropdown-item text-white" href="#">
                Drama
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Gallerie dinamiche */}
    <MovieGallery saga="Harry Potter" query="Harry Potter" />
    <MovieGallery saga="The Lord of the Rings" query="Lord of the Rings" />
    <MovieGallery saga="Star Wars" query="Star Wars" />
  </main>
)

export default Main
