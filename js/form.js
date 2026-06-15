const formBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${formBaseUrl}/components/form.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("form-container").innerHTML = data;
  });