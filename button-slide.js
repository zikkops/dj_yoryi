//
//
//
//
//
const button = document.getElementById("book-btn");

function scrollHandler() {
  window.scrollTo({ left: 0, top: 1000, behavior: "smooth" });
}

button.addEventListener("click", scrollHandler);
