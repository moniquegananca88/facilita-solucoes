fetch(`${window.BASE_URL}/components/whatsapp.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("whatsapp-container").innerHTML = data;

    document.getElementById("whatsapp-icon").src =
      `${window.BASE_URL}/assets/images/whatsapp.png`;
  });