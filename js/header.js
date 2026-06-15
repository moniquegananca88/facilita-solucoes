const headerPath = window.location.pathname.includes("/pages/")
  ? "../components/header.html"
  : "./components/header.html";

fetch(headerPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });