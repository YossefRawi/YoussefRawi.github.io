import pizza from './images/colorato.png';

function menupizza(){

    const divContent = document.getElementById('content') 
    divContent.replaceChildren();
    const menu_items = document.createElement('div');
    menu_items.className = 'menuItems';

    const menu_title = document.createElement('h1');
    menu_title.className = 'menuTitle';
    menu_title.innerText = "Menu";

    

    for(let i = 0; i<6 ; i++){
    
        const myPizza = new Image();
        myPizza.classList.add('item')
        myPizza.src = pizza;

        menu_items.appendChild(myPizza);
    
    }

    divContent.append(menu_title,menu_items);

    return divContent;
}

export {menupizza};