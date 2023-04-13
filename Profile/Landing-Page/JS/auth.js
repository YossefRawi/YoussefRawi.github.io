const profile_img = document.getElementById('profile-img')
const account_img = document.getElementById('account-img')
const profile_img_link = document.getElementById('profile-img-link')
const logout = document.getElementById('log-out');

const profile_data_name = document.getElementById('profile-data-name')
const profile_data_num = document.getElementById('profile-data-num')
const profile_data_add = document.getElementById('profile-data-add')
const profile_data_sadd = document.getElementById('profile-data-sadd')
const profile_data_cty = document.getElementById('profile-data-cty')
const profile_data_ste = document.getElementById('profile-data-ste')






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

// Initialize consts
const auth = firebase.auth()
//const storage = getStorage();
const database = firebase.database()
const laptopia_firestore_db = firebase.firestore()




const userLoggedIn = (email, user, first_name ,sur_name,phone_number,first_address,secondary_address,country,state) =>{
  console.log(email)
  console.log('user logged in: ', user);
  profile_img_link.href = '../HTML/account.html'
  profile_data_name.textContent =  `${first_name}  ${sur_name}`  
  profile_data_num.textContent = phone_number
  profile_data_add.textContent = first_address
  profile_data_sadd.textContent = secondary_address
  profile_data_cty.textContent = country
  profile_data_ste.textContent = state

  
}

const userLoggedOut = () => {
  console.log('user logged out');
  logout.style.display = 'none';
  profile_img_link.href = '../HTML/login.html'
}




auth.onAuthStateChanged(user => {
  
  if (!user) return userLoggedOut()
    
  laptopia_firestore_db.collection('users').doc(user.uid).get().then(doc => {
    let {email, first_name, sur_name,phone_number,first_address,secondary_address,country,state} = doc.data()
    userLoggedIn(email,user,first_name, sur_name,phone_number,first_address,secondary_address,country,state)
  })
  
  let imageListRef = firebase.storage().ref('users/' + user.uid + '/profile.jpg')
  
  
  imageListRef.getDownloadURL().then(url => {
    console.log(url)
    profile_img.src = url
    account_img.src = url
    
  }).catch(error => console.log(error.message))
  
})




logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.replace('../HTML/login.html')
  });


