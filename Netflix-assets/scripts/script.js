document.addEventListener("DOMContentLoaded", function () {
  const avatarButtons = document.querySelectorAll(".avatar-btn img")
  const mainAvatar = document.querySelector(
    'img[alt="Profile"][class*="rounded-3"]'
  )
  avatarButtons.forEach((btn) => {
    btn.parentElement.addEventListener("click", function () {
      mainAvatar.src = btn.src
      // Chiudi il modale
      const modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById("avatarModal")
      )
      modal.hide()
    })
  })
  // Alert per il mockup
  const saveBtn = document.getElementById("saveBtn")
  const alertBox = document.getElementById("mockupAlert")
  if (saveBtn && alertBox) {
    saveBtn.closest("form").addEventListener("submit", function (e) {
      e.preventDefault()
      alertBox.classList.remove("d-none")
      alertBox.classList.add("show")
      setTimeout(() => {
        if (alertBox.classList.contains("show")) {
          const bsAlert = bootstrap.Alert.getOrCreateInstance(alertBox)
          bsAlert.close()
        }
      }, 3500)
    })
  }
})
