import food from'./images/images.jpg';

const homeFunction = () => {

const divContent = document.getElementById('content')  
divContent.replaceChildren();
//Header
const header = document.createElement('h1');
header.classList.add('header');
header.innerText = "Scriptaurant";
divContent.appendChild(header);


//Home image
const myIcon = new Image();
myIcon.classList.add('foodpic')
myIcon.src = food;
divContent.appendChild(myIcon);

//dummy Text for home page
const dummyText = document.createElement('div');
dummyText.classList.add('dummy');
dummyText.innerText = 'Best pizza ever made';
divContent.appendChild(dummyText);

return divContent;
}

export {homeFunction};

