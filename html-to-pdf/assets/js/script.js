const item = document.querySelector(".content")
const btn = document.querySelector("button")

function downloadPDF() {
    let options = {
        margin: 0,
        filename: "pageGenerate.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" }
    }

    html2pdf().set(options).from(item).save()
}

btn.addEventListener("click", () => {
    downloadPDF()
})