const cursor = document.querySelector(".heart");
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x - 100 + "px";
  cursor.style.top = e.y - 100 + "px";
});

document.addEventListener("mousemove", function playMusicOnce() {
  let audio = document.getElementById("bg-music");
  
  audio.volume = 0;
  audio.play().then(() => {
      audio.volume = 1; 
  }).catch(error => console.log("Autoplay bị chặn:", error));

  
  document.removeEventListener("mousemove", playMusicOnce);
});