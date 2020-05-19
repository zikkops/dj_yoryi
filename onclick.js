const popupBtn = document.getElementById("popupbtn");
const popupVideo = document.getElementById("popupvideo");
const blurBg = document.getElementById("blured-bg");
const blurContainer = document.getElementById("blur-container");
const ytVideo = document.getElementById("video-music");

function openPopup() {
  blurBg.classList.add("visible");
  popupVideo.classList.add("visible");
  blurContainer.classList.add("blur");
  song.pause();
}

function closeBlur() {
  blurBg.classList.remove("visible");
  blurContainer.classList.remove("blur");
  song.play();
  pause();
}
function pause() {
  ytVideo.pause;
}

blurBg.addEventListener("click", closeBlur);
popupBtn.addEventListener("click", openPopup);
