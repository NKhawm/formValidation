const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('.success');
    inputControl.classList.remove('.error');
};

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = telephone.value.trim();
    const ageValue = age.value.trim();
    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username can not be blank');
    }
    else {
        setSuccess(username);
    }

}

