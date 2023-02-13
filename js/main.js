const inputEmail = document.getElementById('inputEmail');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail(inputEmail.value);
});

function validateEmail(email) {
  const expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (expReg.test(email) == true) {
    inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
    error.style.display = 'none';
    inputEmail.value = '';
  } else {
    inputEmail.style.border = '1px solid red';
    error.style.display = 'block';
  }
}
