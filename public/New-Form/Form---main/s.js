function checkPass(){
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let Email = document.getElementById('E-mail');
    let phoneNum = document.getElementById('phoneNum');
    let message = document.getElementById('Message');

    if (!firstName.checkValidity()) {
        message.style.color = "red"
        return message.innerHTML = 'Please enter your first name!';
    }
    else if (!lastName.checkValidity()) {
        message.style.color = "red"
        return message.innerHTML = 'Please enter your last name!';
    }
    else if (!Email.checkValidity()) {
        message.style.color = "red"
        return message.innerHTML = 'Please enter an e-mail in the correct format for example: abc@gmail.com';
    }
    else if (!phoneNum.checkValidity()) {
        message.style.color = "red"
        return message.innerHTML = 'Please enter a valid phone number for example: 000-00-000';
    }

    let passWord = document.getElementById('PassWord').value;
    let conPassword = document.getElementById('confirmP').value;
    
    console.log(passWord,conPassword);


    if(passWord.length != 0){
        if(passWord === conPassword){
            message.style.color = "var(--valid-input)"
            
            message.textContent = "Passwords match"


        }
        else{
            
            message.style.color = "red"
            message.textContent = "Passwords don't match"
        }
    } 


}

