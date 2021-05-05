const counterValue = document.querySelector("#value");
const buttonItems = document.querySelectorAll("#counter button");

for (let buttonItem of buttonItems) {
  buttonItem.addEventListener("click", (event) => {
    if (event.target.dataset.action === "increment") {
      counterValue.textContent++;
    }
    if (event.target.dataset.action === "decrement") {
      counterValue.textContent--;
    }
  });
}
