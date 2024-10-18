const lenghtSlider = document.querySelector(".pass-lenght input")
const pasSpan = document.querySelector(".pass-lenght span");
const options = document.querySelectorAll(".option input")
const copyIcon = document.querySelector(".input-box span")
const passwordInput = document.querySelector(".input-box input")
const passIndicator = document.querySelector(".pass-indicator")
const btn = document.querySelector(".btn")

const characters = {
    lowercase: "qwertyuıopğüasdfghjklşizxcvbnmöç",
    uppercase: "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ",
    numbers: "0123456789",
    symbols: "!'^+%&/()=?_->£#$½{[]}@~<>"
}

const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLenght = lenghtSlider.value;

    options.forEach((option) => {
        if (option.checked) {
            if (option.id !== "repeat" && option.id !== "spaces") {
                staticPassword += characters[option.id]
            }
            else if (option.id === "spaces") {
                staticPassword += `${staticPassword}`
            }
            else {
                excludeDuplicate = false;
            }
        }
    })
    for (let i = 0; i < passLenght; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]

        if (excludeDuplicate) {
            !randomPassword.includes(random) || random == " " ? (randomPassword += randomChar) : i--;
        }
        else {
            randomPassword += randomChar;
        }
    }

    passwordInput.value = randomPassword;
}

const updatePassIndicator = () => {
    passIndicator.id = lenghtSlider.value <= 8 ? "weak" : lenghtSlider.value <= 16 ? "medium" : "strong"
}
const updateSlider = () => {
    pasSpan.innerText = lenghtSlider.value;
    generatePassword()
    updatePassIndicator()
}

updateSlider()

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value)
    alert("Kopyalandı")
}
copyIcon.addEventListener("click", copyPassword)
lenghtSlider.addEventListener("input", updateSlider)
btn.addEventListener("click", generatePassword)

