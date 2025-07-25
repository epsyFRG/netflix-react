import React from "react"

const Profile = () => (
  <main className="container" style="max-width: 700px">
    <div
      id="mockupAlert"
      classNameName="alert alert-dismissible fade show d-none mx-auto text-center fw-bold border-0 border-bottom border-4 border-danger bg-black text-white"
      role="alert"
      style="max-width: 500px; z-index: 1055; position: relative"
    >
      <div className="fs-5">
        Sorry! This is just a clone,
        <br />
        so you can't really edit your profile.
      </div>
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>

    <div className="mx-auto" style="max-width: 600px">
      <h1 className="fw-light display-4 mt-5 mb-2">Edit Profile</h1>
      <hr className="bg-secondary opacity-100 mb-4 mt-0" />
      <form>
        <div className="d-flex flex-column flex-md-row align-items-start gap-4 mb-4">
          <div className="position-relative mx-auto mx-md-0">
            <img
              src="Netflix-assets/assets/avatar.png"
              alt="Profile"
              className="rounded-3 bg-success"
              style="width: 120px; height: 120px; object-fit: cover"
            />
            <button
              className="btn btn-dark border-0 p-1 position-absolute bottom-0 start-0 translate-middle-x"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#avatarModal"
              style="border-radius: 50%"
            >
              <i className="bi bi-pencil fs-5"></i>
            </button>
          </div>
          <div className="flex-grow-1 w-100">
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-secondary bg-opacity-50 border-0 text-white fs-5 fw-light"
                value="epsyFRG"
              />
            </div>
            <div className="mb-3">
              <label className="fw-bold mb-1">Language:</label>
              <br />
              <select
                className="form-select d-inline-block w-auto bg-black text-white border-secondary fw-bold py-1 px-2"
                style="min-width: 120px"
              >
                <option selected>English</option>
                <option>Italiano</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
            <hr className="bg-secondary opacity-100 my-4" />
            <div className="mb-3">
              <label className="fw-bold mb-1">Maturity Settings:</label>
              <br />
              <span className="badge bg-dar bg-opacity-75 text-white fw-bold px-3 py-2 mb-2">
                ALL MATURITY RATINGS
              </span>
              <div className="text-white-50 mb-2">
                Show titles of <b>all maturity ratings</b> for this profile.
              </div>
              <button
                className="btn btn-outline-secondary text-white px-4 py-1 fw-bold"
                type="button"
                disabled
              >
                EDIT
              </button>
            </div>
            <hr className="bg-secondary opacity-100 my-4" />
            <div className="mb-3">
              <label className="fw-bold mb-1">Autoplay controls</label>
              <div className="form-check mb-1">
                <input
                  className="form-check-input bg-dark border-secondary"
                  type="checkbox"
                  value=""
                  id="autoplayNext"
                  checked
                  disabled
                />
                <label className="form-check-label" for="autoplayNext">
                  Autoplay next episode in a series on all devices.
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input bg-dark border-secondary"
                  type="checkbox"
                  value=""
                  id="autoplayPreviews"
                  checked
                  disabled
                />
                <label className="form-check-label" for="autoplayPreviews">
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-secondary opacity-100 my-4" />
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          <button
            className="btn btn-light text-dark fw-bold px-4 py-2"
            type="submit"
            id="saveBtn"
          >
            SAVE
          </button>
          <button
            className="btn btn-outline-secondary text-white fw-bold px-4 py-2"
            type="button"
          >
            CANCEL
          </button>
          <button
            className="btn btn-outline-secondary text-white fw-bold px-4 py-2"
            type="button"
          >
            DELETE PROFILE
          </button>
        </div>
      </form>
    </div>
  </main>
)

export default Profile
