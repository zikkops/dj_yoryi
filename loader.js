// window.on("load", function () {
//   document.getElementById("load-wrapper").fadeout("slow");
//   console.log(works);
// });
// const loader = document.getElementById("load-wrapper");
// window.addEventListener("load", function () {
//   loader.classList.add("invisable");
// });
// const preloader = document.querySelector(".preloader");

// const fadeEffect = setInterval(() => {
//   // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
//   if (!preloader.style.opacity) {
//     preloader.style.opacity = 1;
//   }
//   if (preloader.style.opacity > 0) {
//     preloader.style.opacity -= 0.1;
//   } else {
//     clearInterval(fadeEffect);
//   }
// // }, 200);

// window.addEventListener("load", fadeEffect);
const loader = document.getElementById("pre-loader");
function loaderInvisiable() {
  loader.classList.add("loader-invisable");
}
