import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

checkTextArea();

refs.form.addEventListener('input', throttle(onInputForm, 500));

refs.form.addEventListener('submit', onFormSubmit);

function checkTextArea() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const parsedSavedFormData = JSON.parse(savedFormData);

    populateTextArea(parsedSavedFormData);
  }
}

function populateTextArea({ email, message }) {
  refs.email.value = email ?? '';
  formData.email = email;
  refs.message.value = message ?? '';
  formData.message = message;
}

function onInputForm(evt) {
  const name = evt.target.name;
  const value = evt.target.value;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);

  refs.message.value = '';
  refs.email.value = '';
}
