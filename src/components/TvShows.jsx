const TvShows = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="d-flex align-items-center mb-2">
          <h2 className="me-3 mb-0 fw-bold">TV Shows</h2>
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

      <div className="container-fluid">
        <h5 className="fw-bold mt-4 mb-2">Trending Now</h5>
        <div
          className="position-relative"
          style={{ maxWidth: "1540px", overflow: "hidden" }}
        >
          <div
            id="carouselTrending"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media0.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media0"
                  />
                  <img
                    src="Netflix-assets/assets/media/media1.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media1"
                  />
                  <img
                    src="Netflix-assets/assets/media/media2.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media2"
                  />
                  <img
                    src="Netflix-assets/assets/media/media3.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media3"
                  />
                  <img
                    src="Netflix-assets/assets/media/media4.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media4"
                  />
                  <img
                    src="Netflix-assets/assets/media/media5.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media5"
                  />
                  <img
                    src="Netflix-assets/assets/media/media6.jpg"
                    className="img-fluid rounded shadow-lg transition img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media6"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media7.webp"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media7"
                  />
                  <img
                    src="Netflix-assets/assets/media/media8.webp"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media8"
                  />
                  <img
                    src="Netflix-assets/assets/media/media9.jpg"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media9"
                  />
                  <img
                    src="Netflix-assets/assets/media/media10.jpg"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media10"
                  />
                  <img
                    src="Netflix-assets/assets/media/media11.jpg"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media11"
                  />
                  <img
                    src="Netflix-assets/assets/media/media12.jpg"
                    className="img-fluid rounded me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media12"
                  />
                  <img
                    src="Netflix-assets/assets/media/media13.jpg"
                    className="img-fluid rounded img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media13"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselTrending"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h5 className="fw-bold mt-4 mb-2">Watch It Again</h5>
        <div
          className="position-relative"
          style={{ maxWidth: "1540px", overflow: "hidden" }}
        >
          <div
            id="carouselWatch"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media8.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media8"
                  />
                  <img
                    src="Netflix-assets/assets/media/media9.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media9"
                  />
                  <img
                    src="Netflix-assets/assets/media/media10.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media10"
                  />
                  <img
                    src="Netflix-assets/assets/media/media11.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media11"
                  />
                  <img
                    src="Netflix-assets/assets/media/media12.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media12"
                  />
                  <img
                    src="Netflix-assets/assets/media/media13.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media13"
                  />
                  <img
                    src="Netflix-assets/assets/media/media14.webp"
                    className="img-fluid rounded shadow-lg transition img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media14"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media15.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media15"
                  />
                  <img
                    src="Netflix-assets/assets/media/media16.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media16"
                  />
                  <img
                    src="Netflix-assets/assets/media/media17.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media17"
                  />
                  <img
                    src="Netflix-assets/assets/media/media18.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media18"
                  />
                  <img
                    src="Netflix-assets/assets/media/media19.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media19"
                  />
                  <img
                    src="Netflix-assets/assets/media/media20.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media20"
                  />
                  <img
                    src="Netflix-assets/assets/media/media21.webp"
                    className="img-fluid rounded shadow-lg transition img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media21"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselWatch"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h5 className="fw-bold mt-4 mb-2">New Releases</h5>
        <div
          className="position-relative"
          style={{ maxWidth: "1540px", overflow: "hidden" }}
        >
          <div
            id="carouselNew"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media22.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media22"
                  />
                  <img
                    src="Netflix-assets/assets/media/media23.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media23"
                  />
                  <img
                    src="Netflix-assets/assets/media/media24.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media24"
                  />
                  <img
                    src="Netflix-assets/assets/media/media0.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media0"
                  />
                  <img
                    src="Netflix-assets/assets/media/media1.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media1"
                  />
                  <img
                    src="Netflix-assets/assets/media/media2.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media2"
                  />
                  <img
                    src="Netflix-assets/assets/media/media3.webp"
                    className="img-fluid rounded shadow-lg transition img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media3"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex">
                  <img
                    src="Netflix-assets/assets/media/media4.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media4"
                  />
                  <img
                    src="Netflix-assets/assets/media/media5.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media5"
                  />
                  <img
                    src="Netflix-assets/assets/media/media6.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media6"
                  />
                  <img
                    src="Netflix-assets/assets/media/media7.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media7"
                  />
                  <img
                    src="Netflix-assets/assets/media/media8.webp"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media8"
                  />
                  <img
                    src="Netflix-assets/assets/media/media9.jpg"
                    className="img-fluid rounded shadow-lg transition me-3 img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media9"
                  />
                  <img
                    src="Netflix-assets/assets/media/media10.jpg"
                    className="img-fluid rounded shadow-lg transition img-hover-zoom"
                    style={{ width: "220px" }}
                    alt="media10"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselNew"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TvShows
