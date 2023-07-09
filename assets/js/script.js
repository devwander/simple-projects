const items = document.querySelectorAll(".item")

const emojis = [
    "⏰",
    "🌤️",
    "📊",
    "🎯",
    "📜",
    "🕹️",
    "🎨",
    "📄",
    "🎠",
    "🎵",
    "🔐",
    "📷",
    "📲",
    "📝",
    "🔎",
    "📧",
    "🎼",
    "🏷️",
    "✍️"
  ]

items.forEach((item, i) => {
    item.innerText = `${emojis[i]} <${item.innerText}/>`
})

const projects = [
  "analog-clock/",
  "consulting-weather-forecast/",
  "convert-grid-to-csv/",
  "dragInDrop-JavaScript/",
  "menuFlutuante/",
  "flying-dots-hover-effect/",
  "gradientGenerator/",
  "html-to-pdf/",
  "carousel-of-images/",
  "music-player/",
  "passwordGenerator/",
  "photo-editor/",
  "qrCodeGenerator/",
  "quizApp-JavaScript/",
  "searchBar-JavaScript/",
  "sending-email-form-html/",
  "simple-accordion/",
  "tags/",
  "web-notes/"
]

const randomProject = () => {
  window.location.href = projects[Math.floor(Math.random() * projects.length)];
}