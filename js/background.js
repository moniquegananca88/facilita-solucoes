const backgroundBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${backgroundBaseUrl}/components/background.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("background-container").innerHTML = data;
  });