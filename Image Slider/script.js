var slideIndex = "#slide1";
$(document).ready(showSlide(slideIndex));

function showSlide(slideNumber) {
  $("img")
    .hide()
    .animate(
      {
        opacity: 0,
      },
      500
    )
    .removeClass("active");
  $(slideNumber)
    .show()
    .animate(
      {
        opacity: 1,
      },
      1000
    )
    .addClass("active");
}
$("a").click(function icons() {
  slideIndex = $(this).attr("href");
  showSlide(slideIndex);
  $("a").removeClass("active");
  $(this).addClass("active");
});
$("#next").click(function () {
  slideIndex = $("#next").attr("class");
  showSlide(slideIndex)
  $("#next").removeClass(slideIndex)
  $("a").removeClass("active");
  $("a").attr("href", slideIndex).addClass("active");
});
