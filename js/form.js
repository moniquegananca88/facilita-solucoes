const formPath = window.location.pathname.includes("/pages/")
  ? "../components/form.html"
  : "./components/form.html";

fetch(formPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById("form-container").innerHTML = data;
  });