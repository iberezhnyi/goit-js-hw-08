import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

populateFormValue();

const formData = {};

const onFormInput = e => {
  setLocalStorage(e);
};

const onFormSubmit = e => {
  e.preventDefault();

  console.log(populateFormValue());

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function setLocalStorage(e) {
  const name = e.target.name;
  const value = e.target.value;

  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormValue() {
  const formValueStorage = localStorage.getItem(STORAGE_KEY);

  if (formValueStorage) {
    const formValue = JSON.parse(formValueStorage);

    refs.input.value = formValue.email;
    refs.textarea.value = formValue.message;
    return formValue;
  }
}
