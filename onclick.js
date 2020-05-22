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

  document.getElementById("play-btn").src = "./img/icons/play.png";
  ytVideo.src = "https://www.youtube.com/embed/fqRiqWJcess";
}

function closeBlur() {
  blurBg.classList.remove("visible");
  blurContainer.classList.remove("blur");
  song.play();

  document.getElementById("play-btn").src = "./img/icons/pause.png";
  ytVideo.src = " ";
}

blurBg.addEventListener("click", closeBlur);
popupBtn.addEventListener("click", openPopup);
