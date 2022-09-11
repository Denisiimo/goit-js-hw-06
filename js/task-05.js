const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
}

refs.nameInput.addEventListener('input', inputChange);

function inputChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
    refs.nameOutput.textContent = 'Anonymous'
}
}

// nameOutputRef.textContent = nameInputRef;
// console.log(nameInputRef)
// console.log(nameOutputRef)