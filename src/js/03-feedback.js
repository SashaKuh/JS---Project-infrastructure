//Import
import throttle from 'lodash.throttle';

//Code
console.log(throttle);

const form = document.querySelector('.feedback-form');
// console.log(form);
const STORAGE_KEY = "feedback-form-state";


const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY)); 

    if(currentData){
form.elements.email.value = currentData.email;
form.elements.message.value = currentData.message;
    }

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(eve) {
    eve.preventDefault(); 
    const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    console.log(currentData);
} 