const popupBtn = document.getElementById("popupbtn");
const popupVideo = document.getElementById("popupvideo");
const blurBg = document.getElementById("blured-bg");

function openPopup() {
  blurBg.classList.add("visible");
  popupVideo.classList.add("visible");
}

function closeBlur() {
  blurBg.classList.remove("visible");
}

blurBg.addEventListener("click", closeBlur);
popupBtn.addEventListener("click", openPopup);
