
/*const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const phNumber= document.getElementById('ph-number');
const password= document.getElementById('password');
const age= document.getElementById('age');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    
    const usernameVlue = username.value.trim()
    const emailValue = email.value.trim()
    const phNumberValue = phNumber.value.trim()
    const passwordValue = password.value.trim()
    const ageValue = age.value.trim()

    if (usernameValue ===''){
        // show error
        //add error class
        setErrorFor(username,'Username cannot be blank');
    }
    else{
        //add sucess class
        setSuccessFor(username);
    }
}
function setErrorFor(input,message){
    const formControl =input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innterText= message;
    //add error class
    formControl.className = 'form-control error'
}
function setSuccessFor(input){
    const formControl =input.parentElement;
    formControl.className='form-control sucess';
}*/