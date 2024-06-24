document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopup");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopup");

  openPopupButton.addEventListener("click", function () {
    popup.style.display = "flex";
  });
  closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
