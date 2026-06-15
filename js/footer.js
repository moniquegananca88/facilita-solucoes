const footerBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${window.BASE_URL}/components/footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });