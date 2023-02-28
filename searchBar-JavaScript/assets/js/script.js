const content = document.querySelector(".content")
const inputSearch = document.querySelector("input[type='search']")

let items = []

let mockUsers = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque"
]

inputSearch.oninput = () => {
    content.innerHTML = ""

    items
    .filter((item) => {
        return item.toLowerCase().includes(inputSearch.value.toLowerCase())
    })
    .forEach((item) => addHTML(item))
}

const addHTML = (item) => {
    const div = document.createElement("div")
        div.innerHTML = `<a href="https://www.google.com/search?q=${item}" target="_blank">${item}</a>`
    content.append(div)
}

const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        users.forEach((user) => {
            addHTML(user.name)
            items.push(user.name)
        })
    })
    .catch((error) => {
        console.error(error)
        console.warn("It was not possible to search the data online. Utilizing the data already saved!")
        mockUsers.forEach((name) => {
            addHTML(name)
            items.push(name)
        })
    })

}

getData()