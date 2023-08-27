import throttle from 'lodash.throttle';

const KEY_FEEDBACK_FORM_STATE = 'feedback-form-state';
const THROTTLE_TIME = 500;

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
let formData = loadFromLocalStorage(); // Używamy "let" zamiast "const"

const inputEventHandler = throttle(() => {
  saveFormDataToLocalStorage();
}, THROTTLE_TIME);

document.querySelector('input[name="email"]').addEventListener('input', inputEventHandler);
document.querySelector('textarea[name="message"]').addEventListener('input', inputEventHandler);

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();
  clearFormAndStorage();
});

window.addEventListener('load', fillFormFromLocalStorage);

function saveFormDataToLocalStorage() {
  const data = {
    email: email.value,
    message: message.value
  };
  localStorage.setItem(KEY_FEEDBACK_FORM_STATE, JSON.stringify(data));
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM_STATE)) || {};
}

function fillFormFromLocalStorage() {
  email.value = formData.email || '';
  message.value = formData.message || '';
}

function clearFormAndStorage() {
  const clearedData = {
    email: email.value,
    message: message.value
  };

  localStorage.removeItem(KEY_FEEDBACK_FORM_STATE);
  email.value = '';
  message.value = '';
  formData.email = ''; 
  formData.message = '';

  console.log('Form data cleared.');
  console.log('Cleared data:', clearedData);
}
