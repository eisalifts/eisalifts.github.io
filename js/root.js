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
  setTimeout(() => {
    $(".navbar .container::after").on("click", function () {
      $(".mobile").show();
    });

    clearInterval(loadingTimeout);
    $(".preloader").hide();
    // $(".cursor").hide();
    onReady();

    var downFor;

    // if (window.innerWidth > 768) {
    //   var mouseX = 0;
    //   var mouseY = 0;

    //   var mouseMove = function () {
    //     $(".cursor").css({
    //       left: mouseX,
    //       top: mouseY,
    //     });
    //     window.requestAnimationFrame(mouseMove);
    //   };

    //   mouseMove();

    //   $(document)
    //     .on("mouseenter", function () {
    //       $(".cursor").show();
    //     })
    //     .on("mouseleave", function () {
    //       $(".cursor").hide();
    //     })
    //     .on("mousemove", function (e) {
    //       mouseX = e.clientX;
    //       mouseY = e.clientY;
    //     })
    //     .on("mousedown", function (event) {
    //       if (event.which === 3) {
    //         return;
    //       }
    //       $(".cursor").addClass("click");
    //       downFor = new Date();
    //     })
    //     .on("mouseup", function () {
    //       if (new Date() - downFor < 200) {
    //         setTimeout(() => {
    //           $(".cursor").removeClass("click");
    //         }, 200);
    //       } else {
    //         $(".cursor").removeClass("click");
    //       }
    //     })
    //     .on("mouseenter", "a", function () {
    //       $(".cursor").addClass("hover");
    //     })
    //     .on("mouseleave", "a", function () {
    //       $(".cursor").removeClass("hover");
    //     });
    // }
  }, 1500);
});
