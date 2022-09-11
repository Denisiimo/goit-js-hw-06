const fontRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")

fontRef.addEventListener("input", fontChanger)

function fontChanger(event) {
    textRef.style.fontSize =` ${event.target.value}px`
}