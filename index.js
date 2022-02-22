//Getting all input text objects

var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var age = document.forms["vform"]["age"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];

//Error display objects

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var age_error = document.getElementById("age_error");
var password_error = document.getElementById("password_error");

//Event listeners

username.addEventListener("blur", nameVerify,true);

email.addEventListener("blur", emailVerify,true);

age.addEventListener("blur", ageVerify,true);

password.addEventListener("blur", passwordVerify,true);

//Validation function

function Validate(){
    //username
    if(username.value ===''){
        username.style.border = "2px solid red";
        document.getElementById('username_div').style.colr='red';
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    //email
    if(email.value ===''){
        email.style.border = "2px solid red";
        email_error.textContent = "Email is invalid";
        email.focus();
        return false;
    }

    //age
    if(age.value ===''){
        age.style.border = "2px solid red";
        age_error.textContent = "Age can not be blank";
        age.focus();
        return false;
    }

    //password
    if(password.value ===''){
        password.style.border = "2px solid red";
        password_error.textContent = "password doesn't match";
        password.focus();
        return false;
    }
    if(password.value != password_comfirmation.value){
        password.style.border ='2px solid red';
        password_confirmation.style.border = '2px solid red';
        password_error.textContent='Password does not match';
        return false;
    }
}

//Event handler function
function usernameVerify(){
    if (username !=""){
        username.style.border = "2px solid #5e6e66"
        username_error.innerHTML="";
        return true;
    }
    
}

function emailVerify(){
    if (email !=""){
        email.style.border = "2px solid #5e6e66"
        email_error.innerHTML="";
        return true;
    }
    
}

function ageVerify(){
    if (age !=""){
        age.style.border = "2px solid #5e6e66"
        age_error.innerHTML="";
        return true;
    }
    
}

function passwordVerify(){
    if (password !=""){
        password.style.border = "2px solid #5e6e66"
        password_error.innerHTML="";
        return true;
    }
    
}


