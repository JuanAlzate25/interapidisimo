let submitButton = document.getElementById("login-btn")
let username = document.querySelectorAll("input")[0].value;
let userPassword = document.querySelectorAll("input")[1].value;
let user = "Sebastian";
let password = "1234";

submitButton.addEventListener("click", () => {
    let usernameInput = document.querySelectorAll("input")[0];
    let passwordInput = document.querySelectorAll("input")[1];

    let username = usernameInput.value;
    let userPassword = passwordInput.value;

    if (username === user && userPassword === password) {
        window.location.href = "/Views/index.html";
    } else {
        alert("Usuario No Registrado");
        usernameInput.value = "";
        passwordInput.value = "";
    }
});