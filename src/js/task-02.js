const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let parent = document.querySelector("#ingredients");
const listElementLi = createElementLi(ingredients);
parent.insertAdjacentHTML("beforeend", listElementLi);

console.log(listElementLi);

function createElementLi(items) {
  const listLi = items
    .map((i) => {
      let li = document.createElement("li");
      li.innerHTML = i;
      return li.outerHTML;
    })
    .join("");
  return listLi;
}
