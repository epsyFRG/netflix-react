import React from "react"

const Footer = () => (
  <footer className="container-fluid text-secondary mt-5 py-4 bg-black">
    <div className="row mb-3 justify-content-center">
      <div className="col-12 mb-2 text-center">
        <a
          href="https://www.facebook.com/netflixitalia"
          className="me-3 text-secondary"
          target="_blank"
          rel="noopener"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/netflixit/"
          className="me-3 text-secondary"
          target="_blank"
          rel="noopener"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://twitter.com/NetflixIT"
          className="me-3 text-secondary"
          target="_blank"
          rel="noopener"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/@netflixitalia"
          className="me-3 text-secondary"
          target="_blank"
          rel="noopener"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>
    <div className="row mb-2 justify-content-center">
      <div className="col-6 col-md-2">
        <ul className="list-unstyled text-center">
          <li>
            <a href="#" className="text-secondary">
              Audio and Subtitles
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Media Center
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <ul className="list-unstyled text-center">
          <li>
            <a href="#" className="text-secondary">
              Audio Description
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Legal Notices
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <ul className="list-unstyled text-center">
          <li>
            <a href="#" className="text-secondary">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Cookie Preferences
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <ul className="list-unstyled text-center">
          <li>
            <a href="#" className="text-secondary">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="text-secondary">
              Corporate Information
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <span className="footer-service-code">Service Code</span>
      </div>
      <div className="col-12 text-center">
        <small>&copy; 2025 Netflix, Inc.</small>
        <br />
        <small>
          DISCLAIMER: THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT. This
          is NOT the official site of the company or brand identified on the
          page. The creator of this page is NOT affiliated with the company or
          brand in any way. This page is a personal project made in connection
          with an educational exercise.
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
