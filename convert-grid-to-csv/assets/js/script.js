const btnExport = document.querySelector(".btnExport")
const rows = document.querySelectorAll("tr")

btnExport.addEventListener("click", () => {
    const csvContent = Array.from(rows)
        .map(row => {
            Array.from(row.cells)
                .map(cell => cell.textContent)
                .join(",")
        })
        .join("\n")

    const csvData = `data:text/csv;charset=utf-8,${encodeURIComponent(
        csvContent
    )}`

    const link = document.createElement("a")
    link.href = csvData
    link.download = `table${new Date().getMilliseconds()}${new Date().getMinutes()}.csv`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

})