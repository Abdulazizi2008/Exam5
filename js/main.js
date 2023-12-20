import "json-server";

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
let modBtn = document.getElementById("dark-light");

modBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

let firstNamename = document.querySelector("#firsname");
let lastName = document.querySelector("#lastname");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmThePassword = document.querySelector("#confirmthepassword");
let registrate = document.querySelector("#registrate");

let users = {};

function Users(firstName, lastName, userName, password, confirmThepassword) {
  this.firstName = firstName;
  this.laststName = lastName;
  this.userName = userName;
  this.password = password;
  this.confirmThePassword = confirmThepassword;
}

function creaId(users) {
  return Object.keys(users).length;
}

registrate.addEventListener("click", () => {
  const firstNameUser = firstName.value;
  const lastNameUser = lastName.value;
  const userNameUser = userName.value;
  const passwordUser = password.value;
  const confirmThePasswordUser = confirmThePassword.value;

  const user = new user(
    firstNameUser,
    lastNameUser,
    userNameUser,
    passwordUser,
    confirmThePasswordUser
  );

  const userId = "User" + creaId(users);

  users[userId] = user;

  console.log(users);

  alert(`${firstNameUser} you registrated`);
});
document.querySelector("#elestic").oninput = function () {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll(".cardss .card ");
  if (val != "") {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  }
};
