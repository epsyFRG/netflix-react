import React, { useEffect, useState } from "react"
import { Carousel, Row, Col, Image, Container, Spinner } from "react-bootstrap"

const OMDB_API_KEY = "cd3c2343"

function chunkArray(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

function MovieGallery({ saga, query }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [itemsPerSlide, setItemsPerSlide] = useState(5)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) setItemsPerSlide(2)
      else if (window.innerWidth < 900) setItemsPerSlide(3)
      else setItemsPerSlide(5)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(
        query
      )}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.Response === "False") {
          setError(result.Error || "Nessun film trovato.")
          setData([])
        } else {
          setData(result.Search)
        }
      })
      .catch(() => setError("Errore nel caricamento dei dati."))
      .finally(() => setLoading(false))
  }, [query])

  const slides = chunkArray(data, itemsPerSlide)

  return (
    <Container fluid className="my-4">
      <h2 className="text-white ms-2 mb-3">{saga}</h2>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: 150 }}
        >
          <Spinner
            animation="border"
            variant="danger"
            role="status"
            style={{ width: 48, height: 48 }}
          />
        </div>
      )}
      {error && (
        <div
          style={{
            color: "#fff",
            background: "#e50914",
            padding: "0.5rem 1rem",
            borderRadius: 4,
            margin: "1rem 0",
            display: "inline-block",
          }}
        >
          {error}
        </div>
      )}
      {!loading && !error && data.length > 0 && (
        <Carousel indicators={false} interval={null} className="bg-transparent">
          {slides.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="g-2 justify-content-center">
                {group.map((movie) => (
                  <Col
                    key={movie.imdbID}
                    xs={6}
                    sm={4}
                    md={2}
                    lg={2}
                    xl={2}
                    className="d-flex justify-content-center"
                  >
                    <Image
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/Netflix-assets/assets/media/media0.webp"
                      }
                      alt={movie.Title}
                      rounded
                      style={{
                        width: "100%",
                        maxWidth: 180,
                        height: 270,
                        objectFit: "cover",
                        background: "#111",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Container>
  )
}

export default MovieGallery
