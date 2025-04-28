function showAlert() {
  alert("Selamat datang dalam petualangan Moana!");
  document.body.classList.add('loaded');
  createWaves();
  var audio = document.querySelector('audio');
  if (audio) {
      audio.play().catch(error => {
          console.error("Autoplay dicegah:", error);
      });
  }
}

function judulVideo() {
  alert("Saksikan video petualangan Moana!");
}

function judulLagu() {
  alert("Dengarkan lagu tema Moana!");
}

function judulFoto() {
  alert("Lihat momen-momen Moana!");
}

function createWaves() {
  const waveContainer = document.querySelector('.wave-container');
  if (waveContainer) {
      for (let i = 0; i < 50; i++) {
          const wave = document.createElement('div');
          wave.classList.add('wave');
          wave.style.left = Math.random() * 100 + 'vw';
          wave.style.animationDelay = Math.random() * 3 + 's';
          wave.style.animationDuration = Math.random() * 1 + 1 + 's';
          waveContainer.appendChild(wave);
      }
  }
}

window.onload = function() {
  document.body.classList.add('loaded');
  createWaves();
};