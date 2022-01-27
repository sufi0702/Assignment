$(document).ready(function () {
  var imgSrc,
    imgAlt,
    imgsize = 400;
  $(".small-img img").click(function () {
    imgSrc = $(this).attr("src");
    imgAlt = $(this).attr("alt");
    $(".main-img").attr({ src: imgSrc, alt: imgAlt});
  });
  $(".main-img").click(function () {
    imgSrc = $(this).attr("src");
    imgAlt = $(this).attr("alt");
    imgsize = 400;
    $(".zoom-img").attr({ src: imgSrc, alt: imgAlt}).width(imgsize).height(imgsize);
    $(".popup").fadeIn(300);
  });
  $(".zoom-in").click(function () {
    imgsize = (imgsize += 100) > 2000 ? 2000 : imgsize;
    $(".zoom-img").width(imgsize).height(imgsize);
    console.log(imgsize)
  });
  $(".zoom-out").click(function () {
    imgsize = (imgsize -= 100) < 400 ? 400 : imgsize;
    $(".zoom-img").width(imgsize).height(imgsize);
    console.log(imgsize)
  });
  $(".closeBtn").click(function () {
    $(".popup").fadeOut(300);
  });
  $(".popup")
    .click(function () {
      $(".popup").fadeOut(300);
    })
    .children()
    .click(function () {
      return false;
    });
});