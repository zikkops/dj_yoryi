const popupBtn = document.getElementById("popupbtn");
const popupVideo = document.getElementById("popupvideo");
const blurBg = document.getElementById("blured-bg");
const blurContainer = document.getElementById("blur-container");

function openPopup() {
  blurBg.classList.add("visible");
  popupVideo.classList.add("visible");

  blurContainer.classList.add("blur");
}

function closeBlur() {
  blurBg.classList.remove("visible");

  blurContainer.classList.remove("blur");
}

blurBg.addEventListener("click", closeBlur);
popupBtn.addEventListener("click", openPopup);
