let formData = {
  email: '',
  message: '',
};

const inputArea = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.feedback-form');
const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  formData = JSON.parse(savedFormData);
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

inputArea.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

submitBtn.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  } else {
    alert('Fill please all fields');
  }
});
