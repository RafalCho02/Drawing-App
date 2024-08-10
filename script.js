const $canvas = $("#canvas");
const $increaseBtn = $("#increase");
const $decreaseBtn = $("#decrease");
const $sizeEl = $("#size");
const $colorEl = $("#color");
const $clearEl = $("#clear");

const ctx = $canvas[0].getContext("2d");

let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;

$canvas.on("mousedown", function (e) {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

$canvas.on("mouseup", function () {
  isPressed = false;

  x = undefined;
  y = undefined;

  console.log(isPressed, x, y);
});

$canvas.on("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  $sizeEl.text(size);
}

$increaseBtn.on("click", function () {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

$decreaseBtn.on("click", function () {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

$colorEl.on("change", function () {
  color = $(this).val();
});

$clearEl.on("click", function () {
  ctx.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
});
