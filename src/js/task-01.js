

const itemEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${itemEl.length}  категории`);
itemEl.forEach((el) =>

   ( console.log(
        `Категория: ${el.firstElementChild.textContent} `,
         `Количество элементов:${el.lastElementChild.children.length}`
        ))
   
    )




