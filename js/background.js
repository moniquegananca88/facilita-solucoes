const backgroundPath = window.location.pathname.includes("/pages/")
  ? "../components/background.html"
  : "./components/background.html";

fetch(backgroundPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById("background-container").innerHTML = data;
  });