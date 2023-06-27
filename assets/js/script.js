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