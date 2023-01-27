const player = document.querySelector(".player"),
  video = document.querySelector(".viewer"),
  progress = document.querySelector(".progress"),
  progressBar = document.querySelector(".progress__filled"),
  btnPlayer = document.querySelector(".player__button"),
  skipBtns = document.querySelectorAll("[data-skip]"),
  btnsRanges = document.querySelectorAll('input[type="range"]');

function toggleVideo() {
  video[video.paused ? "play" : "pause"]();
}

function updataPlayBtn() {
  btnPlayer.innerHTML = `${video.paused ? "►" : "❚ ❚"}`;
}

function skipping() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  progressBar.style.flexBasis = `${
    (video.currentTime / video.duration) * 100
  }%`;
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener("timeupdate", handleProgress);
video.addEventListener("click", toggleVideo);
video.addEventListener("play", updataPlayBtn);
video.addEventListener("pause", updataPlayBtn);
btnPlayer.addEventListener("click", toggleVideo);
skipBtns.forEach((btn) => {
  btn.addEventListener("click", skipping);
});
btnsRanges.forEach((btn) => btn.addEventListener("change", handleRange));
btnsRanges.forEach((btn) => btn.addEventListener("mousemove", handleRange));
progress.addEventListener("click", scrub);

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    video.currentTime += -parseFloat(25);
  } else if (e.key === "ArrowRight") {
    video.currentTime += parseFloat(25);
  } else if (e.code === "Space") {
    toggleVideo();
  }
});
