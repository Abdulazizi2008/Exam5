// const { create } = require("json-server");

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

document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("elastic");

  input.addEventListener("input", function () {
    var searchTerm = input.value;

    var url = "../db.json" + searchTerm;

    fetch("../db.json")
      .then((response) => response.json())
      .then((data) => displayResults(data))
      .catch((error) => console.error("Error:", error));
  });

  function displayResults(results) {
    var searchResults = document.getElementById("searchResults");
    searchResults.innerText = "";

    if (results.hits.total > 0) {
      results.hits.hits.forEach((hit) => {
        var resultItem = document.createElement("div");
        resultItem.textContent = hit._source.title;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.textContent = "No results found";
    }
  }
});
