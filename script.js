const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//let"s make it interactive
const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function drawCircle() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  requestAnimationFrame(animate);
}
animate();
