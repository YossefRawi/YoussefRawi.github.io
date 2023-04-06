let Email = document.getElementById('e-mail');
let passWord = document.getElementById('passWord');
let subtn = document.getElementById('subtn').addEventListener('click', login)
let message = document.getElementById('Message');
message.style.color = 'red'




function login () {
    
    if(!Email.value.length) return message.textContent = 'Please enter an E-mail'
    if(!passWord.value.length) return message.textContent = 'Please enter an Password'



    // Get all our input fields
    let email = Email.value
    let password = passWord.value


    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // DOne
      message.style.color = 'green'
      message.textContent = 'Logged In!'

      window.location.replace('../Home/index.html')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

        message.textContent = error_message
    })
  }



