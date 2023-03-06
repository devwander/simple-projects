const ul = document.querySelector("ul")
const input = document.querySelector("input")

let itensList = []

const loadItens = () => {
    ul.innerHTML = ""
    itensList.forEach((item, i) => {
        const li = document.createElement("li")

        li.innerHTML = `
        <div>
            <span>
                ${item}
            </span>
            <button class="x-button" onclick="removeItem(${i})" data-i=${i}>x</button>
        </div>
        `

        ul.append(li)
    })
}

const removeItem = (i) => {
    itensList.splice(i, 1);
    loadItens();
}


const clearAll = () => {
    itensList = []
    loadItens()
}

input.addEventListener("keydown", (e) => {
    if (e.code.includes("Enter") && e.target.value) {
        itensList.push(e.target.value)
        input.value = ""
        loadItens()
    }
})