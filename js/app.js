// ЗБЕРЕЖЕННЯ ДАНИХ
const addBtn = document.getElementById("addBtn");
if (addBtn) {
  addBtn.onclick = function () {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "" || content === "") {
      alert("Заповніть всі поля");
      return;
    }

    localStorage.setItem("collapse", JSON.stringify({
      title: title,
      content: content
    }));

    alert("Дані збережено");
  };
}

// ПЕРЕХІД
const viewBtn = document.getElementById("viewBtn");
if (viewBtn) {
  viewBtn.onclick = function () {
    window.location.href = "page2.html";
  };
}

// ЗАВАНТАЖЕННЯ НА ДРУГІЙ СТОРІНЦІ
function loadData() {
  const data = JSON.parse(localStorage.getItem("collapse"));

  if (data) {
    document.getElementById("block1").innerText = data.title;
    document.getElementById("block3").innerText = data.content;
  }
}
