const style = document.createElement('style');
style.innerHTML = `
#validation-input {
    border: 3px solid #bdbdbd;
  }
  
  #validation-input.valid {
    border-color: #4caf50;
  }
  
  #validation-input.invalid {
    border-color: #f44336;
  }
`;
document.head.appendChild(style);




const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputBlur)


function onInputFocus(){
console.log('инпут в фокусе')
};
 
function onInputBlur(){
   
    if(inputEl.value.length <= inputEl.dataset.length){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');  
    } else {
        inputEl.classList.remove('valid');  
        inputEl.classList.add('invalid');
    }
    console.log('инпут потерял в фокусе')
    }