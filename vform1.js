
//variable
const form = document.querySelector ('form');
const username = document.querySelector ('.name');
const email = document.querySelector ('.email');
const phone = document.querySelector ('.phone');
const age = document.querySelector ('.age');
const password = document.querySelector ('.password');
const sub = document.querySelector('#btn');
const eValidation = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9\._-]).([a-z]{2,})$/;

// error display elements
const name_error = document.getElementsByClassName('error_name');
const email_error = document.getElementsByClassName('error_email');
const phone_error = document.getElementsByClassName('error_phone');
const age_error = document.getElementsByClassName('error_age');
const password_error = document.getElementsByClassName('error_password');


//Event listeners
/*username.addEventListener('blur',nameVerify,true);
email.addEventListener('blur',emailVerify,true);
phone.addEventListener('blur',phoneVerify,true);
age.addEventListener('blur',ageVerify,true);
password.addEventListener('blur',passwordVerify,true);*/

//Validation
function Validate(){
    
    //username
    if(username.value ==''){
        username.style.border = "3px solid red";
        //document.getElementsByTagName('label').style.color = "#ff0000";
        name_error.textContent = 'User name can not be blank';
        //userName.focus();
        return false;
    }
}






