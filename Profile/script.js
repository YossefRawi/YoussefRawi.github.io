const Data =
[{  id:1,
    name:"Tic-Tac-Toe",
    image:"../public/assets/portoTTT.png",
    desc:"Simple game of Tic-Tac-Toe using HTML, CSS, JAVASCRIPT.",
    class:"Tic-Tac-Toe",
    link:'../../../Js-Tic-Tac-Toe/TTT.html'

},
{   id:2,
    name:"Calculator ",
    image:"../public/assets/portoCalc.png",
    desc:"A calculator built using HTML, CSS, JAVASCRIPT.",
    class:"calculator",
    link:'./Calc-main/calculator/Index.html'
},
{   id:3,
    name:"To do List",
    image:"../public/assets/portot.png",
    desc:"Built with HTML, CSS, JAVASCRIPT and WEBPACK.",
    class:"Todo-List",
    link:'../JS_ToDoList/dist/index.html'
},
{   id:4,
    name:"Library",
    image:"../public/assets/portola.png",
    desc:"A library app using HTML, CSS, JAVASCRIPT.",
    class:"library",
    link:'../JS-Library-App/library.html'
},
{   id:5,
    name:"Rock Paper Scissors",
    image:"../public/assets/portoRPS.png",
    desc:"A game of Rock-Paper-Scissors using HTML, CSS, JAVASCRIPT.",
    class:"rps",
    link:'../Rock-Paper-Scissors-main/rps/youwin.html'
},
{   id:6,
    name:"Restaurant Page",
    image:"../public/assets/portorp.png",
    desc:"A Restaurant Page using HTML, CSS, JAVASCRIPT and WEBPACK.",
    class:"Restaurant-Page",
    link:'../Restaurant-Page/dist/index.html'
},
{   id:7,
    name:"Sign Up Form",
    image:"../public/assets/portoform.png",
    desc:"A Signup-Form using HTML, CSS, JAVASCRIPT with validation.",
    class:"signup",
    link:'../New-Form/Form---main/signup.html'
},
{   id:8,
    name:"Landing Page",
    image:"../public/assets/protoLP.png",
    desc:"A Landing-Page using HTML, CSS.",
    class:"Landing-Page",
    link:'../Landing-Page/index.html'
},
{   id:9,
    name:"Weather App",
    image:"../public/assets/protoWa.png",
    desc:"A Restaurant Page using HTML, CSS, JAVASCRIPT and WEBPACK.",
    class:"weatherApp",
    link:'../Weather-App/Weatherapp.html'
}]

const main = document.getElementById('main')


const Card = Data.map(card => {
    let createCard = document.createElement('a')
    let createCardDesc = document.createElement('h2')
    createCard.classList.add(card.class,"card")
    createCardDesc.textContent = card.name
    createCard.appendChild(createCardDesc)
    createCard.href = card.link
    createCard.target = "_blank"
    main.appendChild(createCard)

    
})



console.log(Card.card)
//map over an array and create an element for every item of that array


