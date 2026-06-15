const whatsappBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${whatsappBaseUrl}/components/whatsapp.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("whatsapp-container").innerHTML = data;
  });