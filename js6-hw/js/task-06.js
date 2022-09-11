const inputRef = document.querySelector("#validation-input")
const inputLen = inputRef.getAttribute("data-length")

inputRef.addEventListener("blur", onFocus);

function onFocus(event) {
    const isValid = event.currentTarget.value.length === Number(inputLen);
    if (isValid) {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    }
    else {
        event.currentTarget.classList.remove("valid")
        event.currentTarget.classList.add("invalid")
    }
}