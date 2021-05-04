const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let parent = document.querySelector('#ingredients');
const listElementLi = createElementLi(ingredients);
parent.insertAdjacentHTML("beforeend", listElementLi) ;

console.log(listElementLi);

function createElementLi(items){
 const li = items.map(item => {return `<li>${item}</li>`
})
.join('');
  return li
}



 


