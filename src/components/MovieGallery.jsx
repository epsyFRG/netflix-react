import React, { useEffect, useState } from "react"
import "./MovieGallery.css"

const OMDB_API_KEY = "your_omdb_api_key" // Sostituisci con la tua API key OMDB

const MovieGallery = ({ title, query, onLoading, onError }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      onLoading && onLoading(true)
      setError(null)
      onError && onError(null)
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`
        )
        const data = await res.json()
        if (data.Response === "True") {
          setMovies(data.Search)
        } else {
          setError(data.Error || "No movies found")
          onError && onError(data.Error || "No movies found")
        }
      } catch (err) {
        setError("Network error")
        onError && onError("Network error")
      }
      setLoading(false)
      onLoading && onLoading(false)
    }
    fetchMovies()
    // eslint-disable-next-line
  }, [query])

  return (
    <section className="movie-gallery">
      <h2>{title}</h2>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="gallery-row">
        {movies &&
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} alt={movie.Title} />
              <p>{movie.Title}</p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default MovieGallery
