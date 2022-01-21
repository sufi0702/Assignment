var slideIndex = 0;
var auto_play;
var imagesDetails = [
  {
    url: "img/pexels-designecologist-1779487.jpg",
    text: "Silver Imac Displaying Collage Photos",
  },
  {
    url: "img/pexels-josh-sorenson-1714208.jpg",
    text: "Black Flat Screen Computer Monitor",
  },
  {
    url: "img/pexels-lucilene-silva-4069535.jpg",
    text: "Photo Of Laptop Beside Lamp",
  },
  {
    url: "img/pexels-sharon-mccutcheon-1191710.jpg",
    text: "Gliters",
  },
];
$(document).ready(showSlide(slideIndex));
function showSlide(n) {
  if (n >= imagesDetails.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = imagesDetails.length - 1;
  } else {
    slideIndex = n;
  }
  let icons = "";
  for (let i = 0; i < imagesDetails.length; i++) {
    let addClass = i === slideIndex ? "active" : "";
    console.log(i, slideIndex);
    icons +=
      '<button class="icons ' +
      addClass +
      '" title="' +
      i +
      '" ><i class="fas fa-circle"></i></button> ';
  }
  $("#dots").html(icons);
  $("img").attr("src", imagesDetails[slideIndex].url);
  $("img").attr("alt", imagesDetails[slideIndex].text);
  $("#text").html(
    "<b>" + (slideIndex + 1) + ").</b> " + imagesDetails[slideIndex].text
  );
  $("button.icons").click(function () {
    pause();
    slideIndex = parseInt($(this).attr("title"));
    showSlide(slideIndex);
  });
}
$("#pervious-slide").click(function () {
  showSlide((slideIndex += -1));
  pause();
});
$("#next-slide").click(function () {
  showSlide((slideIndex += +1));
  pause();
});
$(".play").click(function play() {
  slideIndex++;
  showSlide(slideIndex);
  auto_play = setTimeout(play, 3000);
  $(".play").hide();
  $(".pause").show();
});
function pause() {
  clearTimeout(auto_play);
  $(".pause").hide();
  $(".play").show();
}
$(".pause").click(function pauseBtn() {
  pause();
});