// text animation
const textAnimated = document.querySelector('.txt-animation');
const animated = () => {
  setTimeout(() => {
    textAnimated.textContent = 'DEVELOPER';
  }, 0);
  setTimeout(() => {
    textAnimated.textContent = 'DESIGNER';
  }, 4000);
};

animated();

setInterval(animated, 8000);

// form // form to google sheets

const formItems = Array.from(document.querySelectorAll('.form-items input'));
const formTextArea = document.querySelector('.form-items textarea');
const formButton = document.querySelector('.form-items button');

formItems.forEach((input) => {
  input.addEventListener('input', processInput);
});

formTextArea.addEventListener('input', processInput);

function processInput() {
  const allInput = formItems.every((item) => item.value.trim() !== '');
  if (allInput && formTextArea.value.trim() !== '') {
    formButton.style.backgroundColor = 'royalBlue';
    formButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (allInput && formTextArea.value.trim() !== '') {
        submitForm();
      }
    });
  } else {
    formButton.style.backgroundColor = '';
  }
}

function submitForm() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyWkkAGymQshH3qvS9kFvWMmoMp_jTSuxZ4k7kPBMF9sYrr2LKYVyUAjVhNyHxC8zYv/exec';
  const form = document.forms['portfolio-contact-form'];

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      alert('pesan terkirim!');
    })
    .catch((error) => {
      console.error('Error!', error.message);
      alert('pesan tidak terkirim(error)!');
    });

  resetForm();
}

function resetForm() {
  formItems.forEach((input) => {
    input.value = '';
  });
  formTextArea.value = '';
  formButton.style.backgroundColor = '';
}
