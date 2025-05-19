const canvas = document.getElementById("gameCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const roadWidth = canvas.width * 0.6;
const roadX = (canvas.width - roadWidth) / 2;

const car = new Car(canvas.width / 2, canvas.height - 100, 40, 70);

function drawRoad(ctx) {
  ctx.fillStyle = "#2c3e50";
  ctx.fillRect(roadX, 0, roadWidth, canvas.height);

  ctx.strokeStyle = "#ecf0f1";
  ctx.lineWidth = 5;
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, y);
    ctx.lineTo(canvas.width / 2, y + 20);
    ctx.stroke();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad(ctx);
  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}

animate();

// Buton kontrolleri
document.getElementById("left").addEventListener("touchstart", () => car.controls.left = true);
document.getElementById("left").addEventListener("touchend", () => car.controls.left = false);

document.getElementById("right").addEventListener("touchstart", () => car.controls.right = true);
document.getElementById("right").addEventListener("touchend", () => car.controls.right = false);

document.getElementById("gas").addEventListener("touchstart", () => car.controls.gas = true);
document.getElementById("gas").addEventListener("touchend", () => car.controls.gas = false);

document.getElementById("brake").addEventListener("touchstart", () => car.controls.brake = true);
document.getElementById("brake").addEventListener("touchend", () => car.controls.brake = false);
