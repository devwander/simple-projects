const items = document.querySelectorAll(".item")

items.forEach((item) => {
    item.innerText = `<${item.innerText}/>`
})