const first_name = document.getElementById('first-name')
const sur_name = document.getElementById('sur-name')
const phone_num = document.getElementById('phone-num')
const first_address = document.getElementById('first-address')
const second_address = document.getElementById('second-address')
const country = document.getElementById('country')
const state = document.getElementById('state')
const profile_button = document.getElementById('profile-button').addEventListener('click', update_your_profile) 







function update_your_profile(){
    const fname = first_name.value
    const sname = sur_name.value
    const pnum = phone_num.value
    const fadd = first_address.value
    const sadd = second_address.value
    const cty = country.value
    const ste = state.value
    
    
    
    auth.onAuthStateChanged(user => {
      
        console.log(user)
        return laptopia_firestore_db.collection('users').doc(user.uid).update({
            first_name : fname,
            sur_name : sname,
            phone_number : pnum,
            first_address : fadd,
            secondary_address : sadd,
            country: cty,
            state: ste

        })
      })


        
 
}





