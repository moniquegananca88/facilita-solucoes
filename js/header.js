const headerBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${headerBaseUrl}/components/header.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });