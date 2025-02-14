const cursor = document.querySelector(".heart");
const desktopOffset = { x: 100, y: 100 };
const mobileOffset = { x: 150, y: 150 };
function updateCursorPosition(x, y, offsets) {
  cursor.style.left = (x - offsets.x) + "px";
  cursor.style.top = (y - offsets.y) + "px";
}
window.addEventListener("mousemove", function (e) {
  updateCursorPosition(e.clientX, e.clientY, desktopOffset);
});
window.addEventListener("touchmove", function (e) {
  if (e.touches && e.touches.length > 0) {
    updateCursorPosition(e.touches[0].clientX, e.touches[0].clientY, mobileOffset);
  }
  e.preventDefault();
}, { passive: false });