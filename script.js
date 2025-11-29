// buscando elementos
const input = document.getElementById("newItem");
const buttonSubmit = document.getElementById("btn-send");

buttonSubmit.addEventListener("click", (evento) => {
  evento.preventDefault(); // agora nem era mais necessário
  addList();
});

function addList() {
  const ul = document.getElementById("list");
  const input = document.getElementById("newItem");
  const removed = document.getElementsByClassName("removed");
  const texto = input.value.trim();
  if (!texto) return;

  const li = document.createElement("li");

  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkbox-concluido";
  checkbox.id = "checkbox-concluido";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });
  const h2 = document.createElement("h2");
  h2.textContent = texto;

  const btnDelete = document.createElement("button");

  btnDelete.addEventListener("click", () => {
    confirm("Você realmente deseja excluir?");
    if (confirm) {
      li.remove();
      showRemovedMessage();
    }
  });
  const imgDelete = document.createElement("img");
  imgDelete.src = "assets/icons/bin.svg";
  imgDelete.alt = "";

  btnDelete.appendChild(imgDelete);

  div.appendChild(checkbox);
  div.appendChild(h2);

  li.appendChild(div);
  li.appendChild(btnDelete);

  ul.appendChild(li);

  input.value = "";
}

function showRemovedMessage() {
  const el = document.getElementById("removedMessage");

  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
  }, 2500);
}
