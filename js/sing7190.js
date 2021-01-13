var fullName;
var studentNumber;
var login;
var homeCountry;
var currentCity;
var catArray = new Array();
var flowerArr = new Array();
var elemID;

class Flower {
  constructor(category, price, instructions, photo, name, productId) {
    this.category = category;
    this.price = price;
    this.instructions = instructions;
    this.photo = photo;
    this.name = name;
    this.productId = productId;
  }
}
$(document).ready(function () {
  //console.log("indocready");
  $.getJSON("data/A2-JSONFile.json", function (data) {
    fullName = data.personal.myFullName;
    studentNumber = data.personal.myStudentNumber;
    login = data.personal.myLoginName;
    homeCountry = data.personal.myHomeCountry;
    currentCity = data.personal.myCurrentCityAddress;

    savePersonalToLocalStorage();

    for (let i = 0; i < data.categories.length; i++) {
      catArray[i] = data.categories[i];
    }
    saveCatToLocalStorage();

    for (let i = 0; i < data.flowerlist.length; i++) {
      flowerArr[i] = new Flower(
        data.flowerlist[i].category,
        data.flowerlist[i].price,
        data.flowerlist[i].instructions,
        data.flowerlist[i].photo,
        data.flowerlist[i].name,
        data.flowerlist[i].productId
      );
    }

    saveFlowerListToLocalStorage();
    // console.log(flowerArr);

    // console.log(fullName);
    // console.log(studentNumber);
    // console.log(login);
    // console.log(homeCountry);
    // console.log(currentCity);

    $("h3:first").html(`A2/ ${fullName}/ ${studentNumber}/ ${login}`);
    $("h5:last").html(`My Home Country: ${homeCountry}... I currently live in 
    ${currentCity}`);

    for (let i = 0; i < catArray.length; i++) {
      console.log(catArray[i]);
      $("#categories").append(
        `<td id = "${i}">
        <a href = "./pages/Flower.html"><p class="card-text"> <div class="card" style="width: 15rem;">
        <img src="images/${catArray[i].pic}" class="card-img-top">
        <div class="card-body">
        ${catArray[i].category}</p>
        </div>
      </div></a></td>
      `
      );
    }
  }); // end of .getJSON
}); // end of doc ready

$(document).on("click", "#categories > td", function () {
  console.log("it works");
  localStorage.setItem("elemID", $(this).closest("td").attr("id"));
});
function savePersonalToLocalStorage() {
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("studentNumber", studentNumber);
  localStorage.setItem("login", login);
  localStorage.setItem("homeCountry", homeCountry);
  localStorage.setItem("currentCity", currentCity);
}

function saveCatToLocalStorage() {
  localStorage.setItem("catArray", JSON.stringify(catArray));
}

function saveFlowerListToLocalStorage() {
  localStorage.setItem("flowerArr", JSON.stringify(flowerArr));
}
