const input = document.querySelector("input")
const button = document.querySelector("button")

const place = document.querySelector("#place")
const degrees = document.querySelector("#degrees")
const img = document.querySelector("img")
const wind = document.querySelector("#wind")
const content = document.querySelector(".content")

const getDataApi = async () => {
    if (!input.value) return

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=dd7aa7009b8e60d6d2b81575c7f328c1`
    try {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data?.cod && data.cod === "404") {
                    return alert("Local não encontrado!")
                }
                loadData(data)
            })
    } catch (error) {
        alert(error)
    }
}

const loadData = (data) => {
    place.innerHTML = `${data.name}, ${data.sys.country}`
    degrees.innerHTML = `Temperatura: ${Math.floor(data.main.temp)} °C`
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    wind.innerHTML = `Vento: ${data.wind.speed} km/h`
    content.style.display = "flex"
}

button.addEventListener("click", () => {
    getDataApi()
})

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getDataApi()
    }
})