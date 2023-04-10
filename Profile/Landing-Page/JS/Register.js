let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let Email = document.getElementById('e-mail');
let phoneNum = document.getElementById('phoneNum');
let message = document.getElementById('Message');
let passWord = document.getElementById('passWord');
let conPassword = document.getElementById('confirmP');
let subtn = document.getElementById('subtn').addEventListener('click', submitForm)
message.style.color = "red"






function printSignedUp(){
    message.style.color = "white"
    message.style.backgroundColor = "green"
    message.style.fontSize = '2vh'
    message.style.padding = '0.5rem'
    message.textContent = "SIGNED UP SUCCESSFULLY!"
}


function submitForm(e){
    //validation
    if (!firstName.checkValidity()) return message.innerHTML = 'Please enter your first name!';

    if (!lastName.checkValidity()) return message.innerHTML = 'Please enter your last name!';

    if (!Email.checkValidity()) return message.innerHTML = 'Please enter an e-mail in the correct format for example: abc@gmail.com';

    if (!phoneNum.checkValidity()) return message.innerHTML = 'Please enter a valid phone number for example: 000-00-000';

    if (passWord.value.length === 0) return message.innerHTML = 'Please Enter a Password';
    
    if(passWord.value !== conPassword.value) return message.textContent = "Passwords don't match"
        
    


    
    
    e.preventDefault();
    
    let firstname = firstName.value
    let lastname = lastName.value
    let e_mail = Email.value
    let phonenum = phoneNum.value
    let password = passWord.value
    let confirmpassword = conPassword.value
    
    send_db(firstname,lastname,e_mail,phonenum,password,confirmpassword)
    
    
}



const send_db = (firstname,lastname,e_mail,phonenum,password,confirmpassword) => {
  //email authetication
    auth.createUserWithEmailAndPassword(e_mail, password)
  .then((cred) => {

    
    return laptopia_firestore_db.collection('users').doc(cred.user.uid).set({
      email : e_mail,
      firstname : firstname,
      lastname: lastname,
      phonenum: phonenum,
      password: password,
      confirmpassword: confirmpassword

    })
})
.then(() =>{
  printSignedUp()
  window.location.replace('../HTML/login.html')
})
.catch(function(error) {
  // Firebase will use this to alert of its errors
  var error_code = error.code
  var error_message = error.message

  message.textContent = error_message
})
}


