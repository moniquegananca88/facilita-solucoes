fetch(`${window.BASE_URL}/components/background.html`)
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById("background-container");

    if (!container) return;

    container.innerHTML = data;

    const video = document.getElementById("background-video");

    if (video) {
      video.src = `${window.BASE_URL}/assets/videos/video.mp4`;
      video.parentElement.load();
    }
  });