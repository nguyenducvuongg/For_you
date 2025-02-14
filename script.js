const cursor = document.querySelector(".heart");
const desktopOffset = { x: 100, y: 100 };
const mobileOffset = { x: 150, y: 150 };
const audio = document.getElementById("bg-music");

function updateCursorPosition(x, y, offsets) {
  cursor.style.left = (x - offsets.x) + "px";
  cursor.style.top = (y - offsets.y) + "px";
}

function enableAudio() {
  audio.muted = false;
  audio.play().catch(error => console.log("Audio play blocked: ", error));
  document.removeEventListener("click", enableAudio);
  document.removeEventListener("keydown", enableAudio);
}

document.addEventListener("click", enableAudio);
document.addEventListener("keydown", enableAudio);

window.addEventListener("mousemove", function (e) {
  updateCursorPosition(e.clientX, e.clientY, desktopOffset);
});

window.addEventListener("touchmove", function (e) {
  if (e.touches && e.touches.length > 0) {
    updateCursorPosition(e.touches[0].clientX, e.touches[0].clientY, mobileOffset);
  }
  e.preventDefault();
}, { passive: false });