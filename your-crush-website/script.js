// Select elements
const music = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');
const toggleBtn = document.getElementById('toggleMusicBtn');
const tapOverlay = document.getElementById('tapOverlay');

// Set initial volume
music.volume = volumeSlider.value;

// Show tap overlay and wait for user interaction
window.addEventListener('load', () => {
  tapOverlay.style.display = 'flex'; // Ensure overlay is visible
});

// User taps anywhere on the overlay
tapOverlay.addEventListener('click', () => {
  music.play().then(() => {
    tapOverlay.style.display = 'none';
    toggleBtn.textContent = "🔊 Music Playing";
  }).catch(() => {
    alert('Failed to start music. Please try again.');
  });
});

// Toggle play/pause
toggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊 Music Playing";
  } else {
    music.pause();
    toggleBtn.textContent = "🔈 Play Music";
  }
});

// Volume control
volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
});

document.getElementById('secretHeart').addEventListener('click', () => {
  const note = document.getElementById('secretNote');
  note.style.display = note.style.display === 'none' ? 'block' : 'none';
});
const colors = ['#ffc0cb', '#ffb6c1', '#ff69b4', '#ff1493'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 1 + 1}rem`;
    heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 400);