import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Spinner, Alert, Card } from "react-bootstrap"

const OMDB_API_KEY = "cd3c2343"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true)
      setError(null)
      try {
        const movieResponse = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`
        )
        const movieData = await movieResponse.json()

        if (movieData.Response === "False") {
          throw new Error(movieData.Error || "Film non trovato")
        }

        setMovie(movieData)

        try {
          const commentsResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
            {
              headers: {
                Authorization: "Bearer your-auth-token-here",
              },
            }
          )
          if (commentsResponse.ok) {
            const commentsData = await commentsResponse.json()
            setComments(commentsData)
          }
        } catch (commentsError) {
          console.error("Errore nel caricamento dei commenti:", commentsError)
        }
      } catch (err) {
        setError(err.message || "Si è verificato un errore")
      } finally {
        setLoading(false)
      }
    }

    if (movieId) {
      fetchMovieDetails()
    }
  }, [movieId])

  if (loading) {
    return (
      <Container className="my-5 d-flex justify-content-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      {movie && (
        <>
          <Row>
            <Col md={4}>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "/Netflix-assets/assets/media/media0.webp"
                }
                alt={movie.Title}
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={8}>
              <h1 className="mb-3">{movie.Title}</h1>
              <p className="text-secondary">
                {movie.Year} • {movie.Runtime} • {movie.Rated}
              </p>
              <p className="mb-4">{movie.Plot}</p>
              <div className="mb-3">
                <strong>Genere:</strong> {movie.Genre}
              </div>
              <div className="mb-3">
                <strong>Regista:</strong> {movie.Director}
              </div>
              <div className="mb-3">
                <strong>Attori:</strong> {movie.Actors}
              </div>
              <div className="mb-3">
                <strong>Valutazioni:</strong>
                <ul className="list-unstyled">
                  {movie.Ratings?.map((rating, index) => (
                    <li key={index}>
                      {rating.Source}: {rating.Value}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

          <h3 className="mt-5 mb-4">Commenti</h3>
          {comments.length > 0 ? (
            <Row className="g-3">
              {comments.map((comment) => (
                <Col md={6} key={comment._id}>
                  <Card className="h-100 bg-dark text-white">
                    <Card.Body>
                      <Card.Title>{comment.author}</Card.Title>
                      <Card.Text>{comment.comment}</Card.Text>
                      <div className="text-warning">
                        {"★".repeat(comment.rate)}
                        {"☆".repeat(5 - comment.rate)}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>Nessun commento disponibile per questo film.</p>
          )}
        </>
      )}
    </Container>
  )
}

export default MovieDetails
