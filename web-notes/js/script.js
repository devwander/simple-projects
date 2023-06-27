const content = document.querySelector(".content");
const btnNew = document.querySelector(".addNoteContent");

let notes_db = localStorage.getItem("notes_db")
  ? JSON.parse(localStorage.getItem("notes_db"))
  : [];

const colors = [
  "#845EC2",
  "#008F7A",
  "#008E9B",
  "#FFC75F",
  "#FF8066",
  "#BA3CAF",
];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function loadItems() {
  content.innerHTML = "";
  verifyNulls();

  notes_db.forEach((item, i) => {
    addHTML(item, i);
  });

  addEvents();
}

btnNew.onclick = () => {
  addHTML();

  addEvents();
};

function addHTML(item) {
  const div = document.createElement("div");

  div.innerHTML = `<div class="item" style="background-color: ${
    item?.color || randomColor()
  }">
    <span class="remove">X</span>
    <textarea>${item?.text || ""}</textarea>
  </div>`;

  content.appendChild(div);
}

function addEvents() {
  const notes = document.querySelectorAll(".item textarea");
  const remove = document.querySelectorAll(".item .remove");

  notes.forEach((item, i) => {
    item.oninput = () => {
      notes_db[i] = {
        text: item.value,
        color: notes_db[i]?.color || item.parentElement.style.backgroundColor,
      };

      localStorage.setItem("notes_db", JSON.stringify(notes_db));
    };
  });

  remove.forEach((item, i) => {
    item.onclick = () => {
      content.children[i].remove();
      if (notes_db[i]) {
        notes_db.splice(i, 1);
        localStorage.setItem("notes_db", JSON.stringify(notes_db));
      }
      addEvents();
    };
  });
}

function verifyNulls() {
  notes_db = notes_db.filter((item) => item);
  localStorage.setItem("notes_db", JSON.stringify(notes_db));
}

loadItems();