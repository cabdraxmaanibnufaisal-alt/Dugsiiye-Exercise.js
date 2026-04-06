const form= document.querySelector('#myForm')
const name= document.querySelector('#username')
const email= document.querySelector('#Email')
const password= document.querySelector('#Password')
const confirmpassword= document.querySelector('#Confirmpassword')
const Error= document.querySelector('#Error')
const Success= document.querySelector('#Success')


form.addEventListener('submit',function(event){
    event.preventDefault()


    const isusernameExcute=Excuteusername()
    const isEmailExcute=ExcuteEmail()
    const isPasswordExcute=ExcutePassword()
    const isConfirmPasswordExcute=ExcuteConfirmpassword()


    if(!isusernameExcute){
        username.focus();
        return
    }else if(!isEmailExcute){
        Email.focus()
        return
    }else if (isPasswordExcute){
        Password.focus()
        return

    }else if(!isConfirmPasswordExcute){
        Confirmpassword.focus()
        return

    }

})


//                   //
function Excuteusername(){
    if(username.value ===''){
        setError(username,'username is not required')
        return false
    }else{
        setSuccess(username)
        return true
    }
}


function ExcuteEmail(){
    const emailpattener= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!Email.value.match(emailpattener)){
        setError(Email,'Your email is not matched')
        return false

    }else{
        setSuccess(Email)
        return true
    }
}

function ExcutePassword(){
    if(Password.value.length < 8){
            setError(Password,'please enter atleast 8')
            return false
    }else{
        setSuccess(Password)
        return true 
    }

}


function ExcuteConfirmpassword(){
    if(ConfimePassword.value !== password.value){
        setError(Confirmpassword,'incorrect')
        return false
    }else{
        setSuccess(Confirmpassword)
        return true  
    }
}



function setError(element,message){
    element.classList.add('invalid')
    element.classList.remove('valid')
    Error.textContent=message
    
}

function setSuccess(element){
    element.classList.add('valid')
    element.classList.remove('invalid')
}


