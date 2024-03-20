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
  onReady();
});
