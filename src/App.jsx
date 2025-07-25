import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MovieGallery from "./components/MovieGallery"
import { useState } from "react"

function App() {
  // Stato per gestire loader ed errori globali (opzionale, se vuoi gestire a livello di pagina)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Callback da passare alle gallerie per gestire loading/error globali (opzionale)
  const handleLoading = (isLoading) => setLoading(isLoading)
  const handleError = (err) => setError(err)

  return (
    <>
      <Navbar />
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <MovieGallery
        title="Harry Potter"
        query="harry potter"
        onLoading={handleLoading}
        onError={handleError}
      />
      <MovieGallery
        title="Lord of the Rings"
        query="lord of the rings"
        onLoading={handleLoading}
        onError={handleError}
      />
      <MovieGallery
        title="Star Wars"
        query="star wars"
        onLoading={handleLoading}
        onError={handleError}
      />
      <Footer />
    </>
  )
}

export default App
