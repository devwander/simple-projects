const columns = document.querySelectorAll(".column")

document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging")
})

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging")
})

columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        const dragging = document.querySelector(".dragging")
        const applyAfter = getNewPosition(item, e.clientY)

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging)
        } else {
            item.prepend(dragging)
        }
    })
})

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".item:not(.dragging)")
    
    let result

    for (let referCard of cards) {
        const box = referCard.getBoundingClientRect()
        const boxCenterY = box.y + box.height / 2

        if (posY >= boxCenterY) result = referCard
    }
    
    return result
}