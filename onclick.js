const popupBtn = document.getElementById("popupbtn");
const popupVideo = document.getElementById("popupvideo");
const blurBg = document.getElementById("blured-bg");
const blurContainer = document.getElementById("blur-container");
const ytVideo = document.getElementById("popupvideo");

ytVideo.innerHTML =
  "<iframe id='video-music' width='560' height='315' src='https://www.youtube.com/embed/fqRiqWJcess' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

function openPopup() {
  blurBg.classList.add("visible");
  popupVideo.classList.add("visible");
  blurContainer.classList.add("blur");
  song.pause();

  document.body.appendChild(ytvideo);
}

function closeBlur() {
  blurBg.classList.remove("visible");
  blurContainer.classList.remove("blur");
  song.play();
}

blurBg.addEventListener("click", closeBlur);
popupBtn.addEventListener("click", openPopup);

function pausevideo() {}
