const newImg = document.querySelector(".newImg")
const inputFile = document.querySelector("input[type=file]")
const img = document.querySelector(".imgContent img")
const buttonsFilter = document.querySelectorAll(".filtersContent button")
const range = document.querySelector("input[type=range]")
const spnRangeValue = document.querySelector("#spnRangeValue")
const btnResetFilters = document.querySelector(".btnResetFilters")
const btnSave = document.querySelector(".btnSave")

let rotate
let flipY
let flipX

let filterActive

let filters

btnResetFilters.onclick = () => init()

init()

function init() {
    filters = {
        Glow: { value: 100, max: 200},
        Contrast: { value: 100, max: 200},
        Saturation: { value: 100, max: 200},
        Gray: { value: 0, max: 100},
        Inversion: { value: 0, max: 100},
    }

    rotate = 0
    flipY = 1
    flipX = 1

    filterActive = "Glow"

    spnRangeValue.innerHTML = 100
    range.max = 200
    range.value = 100

    img.style.transform = ""
    img.style.filter = ""

    document.querySelector(".active").classList.remove("active")
    document.querySelector("#filterDefault").classList.add("active")
}

buttonsFilter.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector(".active").classList.remove("active")

        btn.classList.add("active")

        filterActive = btn.innerHTML

        range.max = filters[filterActive].max
        range.value = filters[filterActive].value

        spnRangeValue.innerHTML = range.value
    }
})

newImg.onclick = () => inputFile.click()

inputFile.onchange = () => loadNewImage()

function loadNewImage() {
    let file = inputFile.files[0]

    if (file) {
        img.src = URL.createObjectURL(file)
    }

    init()
}

range.oninput = () => {
    filters[filterActive].value = range.value
    spnRangeValue.innerHTML = range.value
  
    img.style.filter = `
        brightness(${filters["Glow"].value}%) 
        contrast(${filters["Contrast"].value}%) 
        saturate(${filters["Saturation"].value}%) 
        grayscale(${filters["Gray"].value}%) 
        invert(${filters["Inversion"].value}%)
    `
  }

function handleDirection(type) {
    if (type === "rotateRight") {
        rotate += 90
    } else if (type === "rotateLeft") {
        rotate -= 90
    } else if (type === "reflectY") {
        flipY = flipY === 1 ? -1 : 1
    } else {
        flipX = flipX === 1 ? -1 : 1
    }

    img.style.transform = `rotate(${rotate}deg) scale(${flipY}, ${flipX})`
}

btnSave.onclick = () => download()

function download() {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight

    context.filter = `
        brightness(${filters["Glow"].value}%) 
        contrast(${filters["Contrast"].value}%) 
        saturate(${filters["Saturation"].value}%) 
        grayscale(${filters["Gray"].value}%) 
        invert(${filters["Inversion"].value}%)
    `

    context.translate(canvas.width / 2, canvas.height / 2)

    if (rotate !== 0) {
        context.rotate((rotate * Math.PI) / 180)
    }

    context.scale(flipY, flipX)

    context.drawImage(
        img,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
    )

    const link = document.createElement("a")
    link.download = "phone_editor.png"
    link.href = canvas.toDataURL()
    link.click()
}