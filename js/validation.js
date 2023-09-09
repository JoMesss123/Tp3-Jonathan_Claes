const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const validateForm = () => {
    let noError = true;
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setError(name, 'Veuillez mettre votre nom');
        noError = false;
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Veuillez mettre votre email');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email non valide');
        noError = false;
    } else {
        setSuccess(email);
    }

    if (messageValue === '') {
        setError(message, 'Veuillez mettre votre message');
        noError = false;
    } else {    
        setSuccess(message);
    }

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.errorMessage');
      
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }   

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.errorMessage');
      
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }   
    return noError;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Formulaire envoyé');
    }
});

// Path: js/scroll.js

