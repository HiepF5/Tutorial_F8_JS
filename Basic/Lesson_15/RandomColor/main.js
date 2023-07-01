const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const randomBtn = document.getElementById("random");
const color1Display = document.getElementsByClassName("color-display")[0];
const color2Display = document.getElementsByClassName("color-display")[1];

setGradient(); // gọi hàm setGradient để đặt màu nền mặc định

color1Input.addEventListener("input", () => {
  setGradient();
});

color2Input.addEventListener("input", () => {
  setGradient();
});

randomBtn.addEventListener("click", () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  color1Input.value = randomColor1;
  color2Input.value = randomColor2;
  setGradient();
});

function setGradient() {
  document.body.style.background = `linear-gradient(to right, ${color1Input.value}, ${color2Input.value})`;
  color1Display.innerText = `Mã màu 1: linear-gradient(to right, ${color1Input.value}, ${color2Input.value});`;
  color2Display.innerText = `Mã màu 2: linear-gradient(to right, ${color1Input.value}, ${color2Input.value});`;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
