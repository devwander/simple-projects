const accordionItem = document.querySelectorAll(".accordionItem")

accordionItem.forEach((item) => {
    const accordionHeaderItem = item.querySelector(".accordionHeader")

    accordionHeaderItem.addEventListener("click", () => {
        const accordionContentItem = item.querySelector(".accordionContent")
        const contentActived = document.querySelector(".active")
        verifyActive(item, accordionContentItem, contentActived)
    })
})

function verifyActive(item, content, contentActived) {
    const iconItem = item.querySelector(".icon")
    const icons = document.querySelectorAll(".icon")

    icons.forEach((item) => (item.innerHTML = "+"))

    if (contentActived) {
        contentActived.style.height = 0;
        contentActived.classList.remove("active");
    }

    if (content !== contentActived) {
        iconItem.innerHTML = "-";
        content.classList.add("active");
        content.style.height = content.scrollHeight + 10 + "px";
    }
}