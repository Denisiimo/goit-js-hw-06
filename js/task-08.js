const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("FILL ALL THE FIELDS");
    }

    const obj = {Email: email.value, Password: password.value}
    console.log(obj)
    form.reset()
});
