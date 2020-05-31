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

// second btn

(function ($) {
  function getScrollbarWidth() {
    var scroll, noscroll;
    var outer = $("<div></div>"),
      inner = $("<div></div>");

    outer.css({
      width: "100px",
      visibility: "hidden",
      msOverflowStyle: "scrollbar",
    });

    $("body").append(outer);
    noscroll = outer.width();

    outer.css({ overflow: "scroll" });
    inner.css({ width: "100%" });
    outer.append(inner);
    scroll = inner.width();

    //outer.remove();

    return noscroll - scroll;
  }

  $(".button-menu").click(function () {
    $(this).closest(".menu-container").toggleClass("active");
  });

  $(".button-add").click(function () {
    alert("Вы хотите что-то добавить?");
  });

  var scrollWidth = getScrollbarWidth();
  $(".menu-container").css({ marginRight: -scrollWidth });
  $(".menu").css("width", "+=" + scrollWidth);
})(jQuery);
