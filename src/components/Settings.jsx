import React from "react"

const Settings = () => (
  <main class="container py-5 px-2 px-md-5">
    <h2 class="fs-1 fw-normal mb-4">Account</h2>
    <hr class="mb-4" />
    <div class="row mb-4">
      <div class="col-md-4 mb-3 mb-md-0">
        <div class="text-uppercase text-secondary small fw-bold mb-2">
          Membership & Billing
        </div>
        <button class="btn btn-light border mt-2">Cancel Membership</button>
      </div>
      <div class="col-md-8">
        <div class="d-flex justify-content-between align-items-center py-2">
          <span>epsyfrg@netflix.italy</span>
          <a href="#" class="link-primary">
            Change account email
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2">
          <span class="text-secondary">Password: ********</span>
          <a href="#" class="link-primary">
            Change password
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
          <span class="text-secondary">Phone: 321 044 1279</span>
          <a href="#" class="link-primary">
            Change phone number
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2">
          <span>
            <i class="bi bi-paypal me-2"></i>
            <span class="fw-bold">PayPal</span> epsyfrg@payment.mail
          </span>
          <a href="#" class="link-primary">
            Update payment info
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
          <span></span>
          <a href="#" class="link-primary">
            Billing details
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2">
          <span></span>
          <a href="#" class="link-primary">
            Redeem gift card or promo code
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center py-2">
          <span></span>
          <a href="#" class="link-primary">
            Where to buy gift cards
          </a>
        </div>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="row mb-4 align-items-center">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="text-uppercase text-secondary small fw-bold mb-2">
          Plan Details
        </div>
      </div>
      <div class="col-md-9 d-flex align-items-center">
        <span class="fw-semibold ms-3">Premium</span>
        <span class="badge bg-light text-dark border border-secondary ms-2">
          ULTRA HD
        </span>
        <a href="#" class="link-primary ms-auto">
          Change plan
        </a>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="row mb-4">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="text-uppercase text-secondary small fw-bold mb-2">
          Settings
        </div>
      </div>
      <div class="col-md-9">
        <a href="#" class="d-block link-primary mb-1">
          Parental controls
        </a>
        <a href="#" class="d-block link-primary mb-1">
          Test participation
        </a>
        <a href="#" class="d-block link-primary mb-1">
          Manage download devices
        </a>
        <a href="#" class="d-block link-primary mb-1">
          Activate a device
        </a>
        <a href="#" class="d-block link-primary mb-1">
          Recent device streaming activity
        </a>
        <a href="#" class="d-block link-primary mb-1">
          Sign out of all devices
        </a>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="row mb-4">
      <div class="col-md-3 mb-3 mb-md-0">
        <div class="text-uppercase text-secondary small fw-bold mb-2">
          My Profile
        </div>
      </div>
      <div class="col-md-9">
        <div class="d-flex align-items-center mb-2">
          <img
            src="Netflix-assets/assets/avatar.png"
            alt="Profile"
            width="36"
            height="36"
            class="rounded me-2 border"
          />
          <span class="fw-semibold">epsyFRG</span>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <a href="#" class="d-block link-primary mb-1">
              Language
            </a>
            <a href="#" class="d-block link-primary mb-1">
              Playback settings
            </a>
            <a href="#" class="d-block link-primary mb-1">
              Subtitle appearance
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="d-block link-primary mb-1">
              Viewing activity
            </a>
            <a href="#" class="d-block link-primary mb-1">
              Ratings
            </a>
            <a href="#" class="d-block link-primary mb-1">
              Manage profiles
            </a>
            <a href="#" class="d-block link-primary mb-1">
              Add profile email
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr class="mb-4" />
  </main>
)

export default Settings
