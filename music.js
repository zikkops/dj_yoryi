var songs = ["/music/Song1.mp3", "/music/Song2.mp3"];
var poster = ["Poster1.jpg", "Poster2.jpg"];
var songsName = ["Despacito", "Tunes"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0; // it point to the current song

window.onload = playSong; // it will call the function playSong when window is load

function playSong() {
  song.src = songs[currentSong]; //set the source of 0th song

  songTitle.textContent = songsName[currentSong]; // set the title of song

  song.play(); // play the song
}

function playOrPauseSong() {
  if (song.paused) {
    song.play();
    document.getElementById("play-btn").src = "./img/icons/pause.png";
  } else {
    song.pause();
    document.getElementById("play-btn").src = "./img/icons/play.png";
  }
}
function pausesong() {
  song.pause();
}
function playsong() {
  song.play();
}

song.addEventListener("timeupdate", function () {
  var position = song.currentTime / song.duration;

  fillBar.style.width = position * 100 + "%";
});

function next() {
  currentSong++;
  if (currentSong > 1) {
    currentSong = 0;
  }
  playSong();
}

function pre() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 1;
  }
  playSong();
}
