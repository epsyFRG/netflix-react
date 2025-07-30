import "./App.css"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TvShows from "./components/TvShows"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tv-shows" element={<TvShows />} />

          {/* <Profile /> */}
          {/* <Settings /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
