var onReady = () => {
  $(".products .product img").css(
    "height",
    $(".products .product img").width()
  );

  $(".navbar .container::after").on("click", function () {
    $(".mobile").show();
  });
};
