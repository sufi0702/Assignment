var slideIndex = 0;
var auto_play;
var imagesDetails = [
  {
    id: 1,
    url: "img/1-profile-image.jpg",
    alt: "1 Profile Image",
    name: "Sufiyan Akbani",
    designation: "Intern Consulting",
    description:
      "Hello😊, I am Sufiyan Akbani from Nagpur and now I am working as a Intern Consulting in UI team Perficient Company",
  },
  {
    id: 2,
    url: "img/2-profile-image.jpg",
    alt: "2 Profile Image",
    name: "Ram Shrirao",
    designation: "Intern Consulting",
    description:
      "Hello😊, I am Ram Shrirao from Nagpur and now I am working as a Intern Consulting in UI team of Perficient Company",
  },
  {
    id: 3,
    url: "img/3-profile-image.jpg",
    alt: "3 Profile Image",
    name: "Karan Dalwani",
    designation: "Intern Consulting",
    description:
      "Hello😊, I am Karan Dalwani from Nagpur and now I am working as a Intern Consulting in UI team of Perficient Company",
  },
];

function showSlider(n) {
  console.log("n = ", n);
  let img = "",
    dots = "",
    content = "";
  if (n >= imagesDetails.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = imagesDetails.length - 1;
  } else {
    slideIndex = n;
  }
  for (let i = 0; i < imagesDetails.length; i++) {
    let display = i === slideIndex ? "block" : "none";
    let addClass = i === slideIndex ? "on" : "";
    img +=
      '<img src="' +
      imagesDetails[i].url +
      '" alt="' +
      imagesDetails[i].alt +
      '" title="' +
      imagesDetails[i].name +
      ' Profile Image" style="display: ' +
      display +
      '" id="img' +
      imagesDetails[i].id +
      '" />';
    // console.log("i = ", i, " n = ", n);
    content +=
      '<h2 style="display:' +
      display +
      ';" title="Name">' +
      imagesDetails[i].name +
      '</h2> <h4 style="display:' +
      display +
      ';" title="Designation">' +
      imagesDetails[i].designation +
      '</h4> <p style="display:' +
      display +
      ';" title="Description">' +
      imagesDetails[i].description +
      "</p>";
    dots +=
      '<span style="margin: 10px" class="dot' +
      i +
      " " +
      addClass +
      '" title="' +
      (i + 1) +
      ' Slide/Profile" onclick="showSlider(' +
      i +
      ')"> <i class="fas fa-circle"></i> </span>';
  }
  document.getElementById("images").innerHTML = img;
  document.getElementById("content").innerHTML = content;
  document.getElementById("dots").innerHTML = dots;
}

showSlider(slideIndex);

function addNewSlide(e) {
  e.preventDefault();
  let addNewDetails = {
    id: imagesDetails.length,
    url: "img/default-profile-pic.webp",
    alt: imagesDetails.length + 1 + " Profile Image",
    name: e.target.name.value,
    designation: e.target.designation.value,
    description: e.target.description.value,
  };
  // console.log(addNewDetails)
  imagesDetails.push(addNewDetails);
  showSlider(imagesDetails.length - 1);
}
