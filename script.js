const lampuImg = document.getElementById("lampu-img");
const switchBtn = document.getElementById("switch-btn");
let isLampOn = false;

function toggleLamp() {
  const body = document.body;
  if (isLampOn) {
    lampuImg.src = "lampu_off.png";
    switchBtn.textContent = "ON";
    body.style.backgroundColor = "black"; // Mengubah latar belakang menjadi hitam
  } else {
    lampuImg.src = "lampu_on.png";
    switchBtn.textContent = "OFF";
    body.style.backgroundColor = "white"; // Mengubah latar belakang menjadi putih
  }
  body.style.transition = "background-color 0.5s ease"; // Menambahkan transisi
  isLampOn = !isLampOn;
}

switchBtn.addEventListener("click", toggleLamp);
