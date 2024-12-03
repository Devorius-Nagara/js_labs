function validateForm() {
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const postalCodeInput = document.getElementById("postalCode");

    // Regular expressions for validation
    const emailRegex = /^[a-z0-9]+(\.[a-z0-9]+)*@pnu\.edu\.ua$/i;
    const nameRegex = /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я]+$/;
    const loginRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_\-!@#$%^&*])[A-Za-z\d_\-!@#$%^&*]{8,}$/;
    const postalCodeRegex = /^\d{5}$/;

    validateField(emailInput, emailRegex, "Невірний формат e-mail");
    validateField(nameInput, nameRegex, "Ім'я: Перша літера велика; Прізвище - всі великі");
    validateField(loginInput, loginRegex, "Логін: тільки латинські літери");
    validateField(passwordInput, passwordRegex, "Пароль: мінімум 8 символів, 1 буква, 1 цифра, 1 спецсимвол");
    validateField(postalCodeInput, postalCodeRegex, "Індекс має складатися з 5 цифр");
}

function validateField(input, regex, errorMessage) {
    const errorSpan = input.nextElementSibling;
    if (regex.test(input.value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        errorSpan.style.display = "none";
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = "block";
    }
}