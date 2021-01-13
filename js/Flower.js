var currentCat;
$(document).ready(function () {
  console.log("inflower.js");

  fullName = localStorage.getItem("fullName");
  studentNumber = localStorage.getItem("studentNumber");
  login = localStorage.getItem("login");
  homeCountry = localStorage.getItem("homeCountry");
  currentCity = localStorage.getItem("currentCity");
  flowerArr = JSON.parse(localStorage.getItem("flowerArr"));
  catArray = JSON.parse(localStorage.getItem("catArray"));
  elemID = localStorage.getItem("elemID");

  $("h3:first").html(`A2/ ${fullName}/ ${studentNumber}/ ${login}`);
  $("h5:last").html(`My Home Country: ${homeCountry}... I currently live in 
  ${currentCity}`);
  $("h1:first").html(`${catArray[elemID].category}`);

  currentCat = catArray[elemID].category;

  for (let fl of flowerArr) {
    console.log(currentCat);
    if (currentCat == fl.category) {
      $("#flphoto").append(
        `<div class = "col">
        <img src = "../images/${fl.photo}" width = "100" height = "100">
        </div>
              `
      );
      $("#flname").append(
        `<div class = "col">
        <strong>${fl.name}</strong>
        </div>
              `
      );
      $("#flprice").append(
        `<div class = "col" id = "price">
        $ ${fl.price}
        </div>
              `
      );
      $("#flinstructions").append(
        `<div class = "col">
        ${fl.instructions}
        </div>
              `
      );
    }
  }
});
