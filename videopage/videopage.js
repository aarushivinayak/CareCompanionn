
const video = document.getElementById('video');
const playButton = document.getElementById('playpause');
const muteButton = document.getElementById('mute');
const seekBar = document.getElementById('seek');
const videoContainer = document.getElementById('video-container');

playButton.addEventListener('click', togglePlayPause);
videoContainer.addEventListener('click', togglePlayPause);

muteButton.addEventListener('click', toggleMute);

seekBar.addEventListener('change', function() {
  const time = video.duration * (seekBar.value / 100);
  video.currentTime = time;
});

video.addEventListener('timeupdate', function() {
  const value = (video.currentTime / video.duration) * 100;
  seekBar.value = value;
});

video.addEventListener('ended', function() {
  playButton.innerHTML = '<i class="bx bx-play"></i>';
});

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playButton.innerHTML = '<i class="bx bx-pause"></i>';
  } else {
    video.pause();
    playButton.innerHTML = '<i class="bx bx-play"></i>';
  }
}

function toggleMute() {
  video.muted = !video.muted;
  muteButton.innerHTML = video.muted ? '<i class="bx bxs-volume-mute"></i>' : '<i class="bx bxs-volume-full"></i>';
}
