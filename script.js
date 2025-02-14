const cursor = document.querySelector(".heart");
function updateCursor(x, y) {
    cursor.style.left = x - 50 + "px";
    cursor.style.top = y - 50 + "px";
}
window.addEventListener("mousemove", function(e) {
    updateCursor(e.x, e.y);
});
window.addEventListener("touchmove", function(e) {
    if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        updateCursor(touch.clientX, touch.clientY);
    }
    e.preventDefault();
},{passive: false});