const input = document.querySelector('.apparel-input');
const form = document.querySelector('.apparel-form');

function emailIsValid(email) {
     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
     // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function styleForm(e) {
     e.preventDefault();

     const isValid = emailIsValid(input.value);

     clearTimeout();

     input.value = isValid ? '' : input.value;
     input.style.border = `2px solid ${isValid ? 'hsl(145, 41%, 51%)' : 'hsl(0, 93%, 68%)'}`
     form.classList.add(`${isValid ? 'apparel-message-valid' : 'apparel-message-not-valid'}`)
     
     !isValid && input.classList.add('apparel-email-not-valid');

     setTimeout(() => {
          input.style.border = '';
          input.classList.remove('apparel-email-not-valid')
          form.classList.remove(`${ isValid ? 'apparel-message-valid' : 'apparel-message-not-valid'}`)
     }, 1500);
}

form.addEventListener('submit', styleForm)

