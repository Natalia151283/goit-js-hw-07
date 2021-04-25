const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let parent = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++) {
	let li = document.createElement('li');
	li.innerHTML = ingredients[i];
	parent.appendChild(li);
}

 


