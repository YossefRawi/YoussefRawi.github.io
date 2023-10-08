//
const profile_img = document.getElementById('profile-img')
const account_img = document.getElementById('account-img')
const profile_img_link = document.getElementById('profile-img-link')
const logout = document.getElementById('log-out');
//
const profile_data_name = document.getElementById('profile-data-name')
const profile_data_num = document.getElementById('profile-data-num')
const profile_data_add = document.getElementById('profile-data-add')
const profile_data_sadd = document.getElementById('profile-data-sadd')
const profile_data_cty = document.getElementById('profile-data-cty')
const profile_data_ste = document.getElementById('profile-data-ste')
//
const order_card = document.getElementById('order-card')
const order_items = document.getElementById('order-items')

let c = console.log.bind(document)




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




const userLoggedIn = (email, first_name,sur_name,phone_number,first_address,secondary_address,country,state,user) =>{
  console.log('user logged in: ', user);
  profile_img_link.href = '../HTML/account.html'
  profile_data_name.textContent =  `${first_name} ${sur_name}`  
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
  getUserInfo(user)
  getProfileImage(user)
  getOrders(user) 
})




logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    location.replace('../HTML/login.html')
  });







function getUserInfo(user){
  laptopia_firestore_db.collection('users').doc(user.uid).get().then(doc => {
    let {email, first_name, sur_name,phone_number,first_address,secondary_address,country,state} = doc.data()


    userLoggedIn(email,first_name,sur_name,phone_number,first_address,secondary_address,country,state,user)

    
  }).catch(error => console.log(error.message))
  

}


function getProfileImage(user){
  let imageListRef = firebase.storage().ref('users/' + user.uid + '/profile.jpg')
  imageListRef.getDownloadURL().then(url => {
    profile_img.src = url
    account_img.src = url
    
  }).catch(error => console.log(error.message))
}



  function getOrders(user){


    laptopia_firestore_db.collection('users').doc(user.uid).get().then(doc => {
      let {first_address} = doc.data()

      
          const order_address = document.createElement('h2')
          c(typeof(order_address))
          order_address.textContent = first_address 
          order_items.append(order_address)

      
    })
    
    laptopia_firestore_db.collection('cart').doc(user.uid).get().then(doc => {
      

      Object.keys(doc.data()).map(key => {
        const {title , amount , totalItemAmount} = doc.data()[key]

        const order_div = document.createElement('div')
        const order_name = document.createElement('h2')
        const order_amount = document.createElement('h2')
        const order_total = document.createElement('h2')
        const order_number = document.createElement('h2')
        

        order_name.textContent = title
        order_amount.textContent = amount
        order_total.textContent = `$${totalItemAmount}`
        order_div.append(order_name,order_amount,order_total)
        order_items.append(order_div)
        order_card.append(order_items)


      })

    }).catch(error => console.log(error.message))
  }
