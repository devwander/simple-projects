const passwordInput = document.querySelector("#password")
const inputLength = document.querySelector("#inputLength")
const infoLength = document.querySelector('label[for="inputLength"')
const buttonGerar = document.querySelector("#buttonGerar")

const chkLower = document.querySelector("#chkLower")
const chkUpper = document.querySelector("#chkUpper")
const chkNumber = document.querySelector("#chkNumber")
const chkSymbols = document.querySelector("#chkSymbols")

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_","-"]

const caracters = Array.from(Array(26)).map((_, i) => i + 97)
const lowercaseCaracters = caracters.map((code) => String.fromCharCode(code))
const uppercaseCaracters = lowercaseCaracters.map((char) => char.toUpperCase())

infoLength.innerHTML = inputLength.value

inputLength.addEventListener("change", () => {
    infoLength.innerHTML = inputLength.value
})

buttonGerar.addEventListener("click", () => {
    generatePassword(
        chkLower.checked,
        chkUpper.checked,
        chkNumber.checked,
        chkSymbols.checked,
        inputLength.value
    )
})

function generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols, 
    lenght
    ) {
        const newArray = [
        ...(hasLower ? lowercaseCaracters : []),
        ...(hasUpper ? uppercaseCaracters : []),
        ...(hasNumber ? numbers : []),
        ...(hasSymbols ? symbols : [])
    ]
    
    if (newArray.length === 0) return
    
    let password = ""
    
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }

    passwordInput.value = password
}