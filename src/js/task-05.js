const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl:  document.querySelector('#name-output')
};


refs.inputEl.addEventListener('input',onInputChange);

function onInputChange(event){

if (refs.spanEl.textContent = event.currentTarget.value){
    true
}
if(refs.spanEl.textContent !== event.currentTarget.value){
    'незнакомец'
};
};

