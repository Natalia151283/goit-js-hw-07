const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', inputValue);
console.log(inputEl.value);



function inputValue(event){
    spanEl.style.fontSize = `${inputEl.value}%`;
  
};

