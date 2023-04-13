

const first_name = document.getElementById('first-name')
const sur_name = document.getElementById('sur-name')
const phone_num = document.getElementById('phone-num')
const first_address = document.getElementById('first-address')
const second_address = document.getElementById('second-address')
const country = document.getElementById('country')
const state = document.getElementById('state')

const profile_message = document.getElementById('profile-message')

const profile_img_button = document.getElementById('profile-img-upload')

const profile_button = document.getElementById('profile-button').addEventListener('click', update_your_profile) 

let file = {}








function update_your_profile(e){
    profile_message.style.display = 'block'
    if (!first_name.checkValidity()) return profile_message.innerHTML = 'Please enter your first name.';
    if (!sur_name.checkValidity()) return profile_message.innerHTML = 'Please enter your sur name.';
    if (!phone_num.checkValidity()) return profile_message.innerHTML = 'Please enter a valid phone number.';
    if (!first_address.checkValidity()) return profile_message.innerHTML = 'Please enter a valid address.';
    if (!country.checkValidity()) return profile_message.innerHTML = 'Please enter the country which you reside in.';
    if (!state.checkValidity()) return profile_message.innerHTML = 'Please enter the state/region which you reside in.';



    const fname = first_name.value
    const sname = sur_name.value
    const pnum = phone_num.value
    const fadd = first_address.value
    const sadd = second_address.value
    const cty = country.value
    const ste = state.value
    
    e.preventDefault();

    let user = auth.currentUser



        console.log(user)
        return laptopia_firestore_db.collection('users').doc(user.uid).update({
            first_name : fname,
            sur_name : sname,
            phone_number : pnum,
            first_address : fadd,
            secondary_address : sadd,
            country: cty,
            state: ste

        }).then(() =>{
            profile_message.style.backgroundColor = 'rgba(0, 195, 0, 0.602)'
            profile_message.style.border = '1px solid rgb(0, 133, 0)'
            profile_message.textContent = 'Succesfully Upated Profile!'
        } ).catch(error => console.log(error.message))


        


    }
    
    function chooseFile(e){
        
        file = e.target.files[0]
        
    
    }

    
    

function signUpButtonPressed(){
    let user = auth.currentUser
    console.log(user)

    let imageListRef = firebase.storage().ref('users/' + user.uid + '/profile.jpg')

    imageListRef.put(file).then(() => {
        console.log('success')
    }).catch(error => {
        console.log(error.message)
    })
}




