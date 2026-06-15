const backgroundBaseUrl = window.location.hostname.includes("github.io")
  ? "/facilita-solucoes"
  : "";

fetch(`${window.BASE_URL}/components/background.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("background-container").innerHTML = data;

    document.getElementById("background-video").src =
      `${window.BASE_URL}/assets/videos/video.mp4`;
  });