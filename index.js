var i = 0;

var loadingTimeout = setInterval(() => {
  if (i % 3 === 0) {
    $(".preloader p").text("Loading.");
  } else {
    $(".preloader p").append(".");
  }
  i++;
}, 500);

$(document).ready(function () {
  clearInterval(loadingTimeout);
  $(".preloader").hide();

  $(".products .product img").css(
    "height",
    $(".products .product img").width()
  );

  $(".navbar .container::after").on("click", function () {
    $(".mobile").show();
  });
});
