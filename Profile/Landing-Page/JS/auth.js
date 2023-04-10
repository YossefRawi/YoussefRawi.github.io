
const account_id = document.getElementById('account-id')






const firebaseConfig = {
    apiKey: "AIzaSyARGvQlOdyoZqoVWRu_w3jhRrn3LbTUaV4",
    authDomain: "laptopia-a63a4.firebaseapp.com",
    databaseURL: "https://laptopia-a63a4-default-rtdb.firebaseio.com",
    projectId: "laptopia-a63a4",
    storageBucket: "laptopia-a63a4.appspot.com",
    messagingSenderId: "583763164258",
    appId: "1:583763164258:web:2e83425c1b16164fe3e53b"
  };

firebase.initializeApp(firebaseConfig);

const laptopia_db = firebase.database().ref('laptopia')

// Initialize variables
 const auth = firebase.auth()
 const database = firebase.database()
 const laptopia_firestore_db = firebase.firestore()




 const userLoggedIn = (first_name, user) =>{
  console.log(first_name)
  console.log('user logged in: ', user);
  account_id.href = '../HTML/account.html'
  account_id.style.backgroundColor= 'white';
  account_id.style.color='var(--main-color)'
  account_id.textContent = first_name
}

const userLoggedOut = () => {
  console.log('user logged out');
  account_id.href = '../HTML/login.html'
  logout.style.display = 'none';
}




auth.onAuthStateChanged(user => {
  
    if (!user) return userLoggedOut()

    console.log(user.uid)

    laptopia_firestore_db.collection('users').doc(user.uid).get().then(doc => {
    userLoggedIn(doc.data().firstname,user)
    })
  })
  


