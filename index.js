const canvas = document.getElementById("c");
const context = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 10;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const allEqual = (arr) => arr.every((v) => v === arr[0]);

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = rainDrops.length; i > 0; i--) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize + height);
    if (Math.random() > 0.989 || rainDrops[i] * fontSize > canvas.height) {
      rainDrops[i] = 0;
    }
    rainDrops[i]--;
  }
};

setInterval(draw, 50);
