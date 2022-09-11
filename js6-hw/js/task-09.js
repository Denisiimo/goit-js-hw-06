const colorBtnRef = document.querySelector(".change-color")
const colorRef = document.querySelector(".color")
const bodyRef = document.querySelector("body")

colorBtnRef.addEventListener("click", colorChange);

function colorChange() {
  const colorChange = getRandomHexColor();
  colorRef.textContent = colorChange;
  bodyRef.style.backgroundColor = colorChange;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
