import map from "./images/map.jpg";


function contactPage(){
    const divContent = document.getElementById('content');

    divContent.replaceChildren();


    const contact_div = document.createElement('div');
    contact_div.classList.add('contacts')

    //Title Contacts
    const contact_title = document.createElement('h1');
    contact_title.classList.add('conTitle');
    contact_title.innerText = 'Contacts';
    contact_div.appendChild(contact_title)


    //Map image
    const myMap = new Image();
    myMap.classList.add('mapImage')
    myMap.src = map;
    contact_div.appendChild(myMap)



divContent.appendChild(contact_div);

return divContent;

}


export {contactPage}