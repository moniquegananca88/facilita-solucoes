const whatsappPath = window.location.pathname.includes("/pages/")
  ? "../components/whatsapp.html"
  : "./components/whatsapp.html";

fetch(whatsappPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById("whatsapp-container").innerHTML = data;
  });