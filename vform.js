const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const ageInput = document.querySelector('input[name="age"]');
const passwordInput = document.querySelector('input[name="password"]');

let isFormValid = false;


const validateInputs = () => {
    nameInput.classList.remove("invalid");
    nameInput.nextElementSibling.classList.add("hidden");
    isFormValid = true;


    if (!nameInput.value){
        nameInput.classList.add("invalid");
        nameInput.nextElementSibling.classList.remove("hidden");
        isFormValid = false;
    }
};




form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid){
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

/*nameInput.addEventListener("input",() => {
    validateInputs();
});*/