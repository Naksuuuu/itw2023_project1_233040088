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

// form
const formItems = Array.from(document.querySelectorAll('.form-items input'));
const formTextArea = document.querySelector('.form-items textarea');
const formButton = document.querySelector('.form-items button');

formItems.forEach((input) => {
  input.addEventListener('input', processInput);
});

formTextArea.addEventListener('input', processInput);

function processInput() {
  const allInput = formItems.every((item) => item.value != '');
  if (allInput && formTextArea.value.trim() != '') {
    formButton.style.backgroundColor = 'royalBlue';
    formButton.addEventListener('click', (btn) => {
      btn.preventDefault();
      formItems.forEach((input) => {
        input.value = '';
      });
      formTextArea.value = '';
      formButton.style.backgroundColor = '';
    });
  }
}
