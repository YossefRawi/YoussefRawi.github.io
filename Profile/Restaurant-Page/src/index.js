import './style.css';

import { homeFunction } from './home';
import {menupizza} from './menu'
import {contactPage} from './contact'


//Kept the buttons on index.js because they are the only constant in the page
const divContent = document.getElementById('content') 
//buttons
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const createInput = document.createElement('div');
createInput.className = "btns";
createInput.appendChild(homeBtn);
createInput.appendChild(menuBtn);
createInput.appendChild(contactBtn);
homeBtn.innerText = 'Home';
menuBtn.innerText = 'Menu';
contactBtn.innerText = 'Contact';
divContent.appendChild(createInput);


document.body.append(createInput,homeFunction())


homeBtn.addEventListener('click',() =>{
    document.body.append(homeFunction())
    
})

menuBtn.addEventListener('click', () => {
    document.body.append(menupizza())
    
})

contactBtn.addEventListener('click', () => {
    
    document.body.append(contactPage())
})




