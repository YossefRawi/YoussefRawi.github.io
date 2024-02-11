
const main_cart_body = document.getElementById("main-cart-body")
const shop_items = document.getElementById('shop-items')
const search_bar = document.getElementById("search-bar")
const checkout_amount = document.getElementById("checkout-amount")
const added_to_cart = document.getElementById('added-to-cart')
const modal_body = document.getElementById('modal-body')

//CHECKOUT
const checkout_button = document.getElementById('checkout-button')
checkout_button.addEventListener('click', checkoutItems)


//Toggles Between Shop and Cart like Tabs
const shop_main = document.getElementById("shop-main")
const cart_main = document.getElementById("cart-main")

const toggle_shop = document.getElementById('toggle-shop').addEventListener('click', () => {
    shop_main.classList.remove('toggle')
    cart_main.classList.add('toggle')
})

const toggle_cart = document.getElementById('toggle-cart').addEventListener('click', () => {
    cart_main.classList.remove('toggle')
    shop_main.classList.add('toggle')
})



//CHECKS WETHER THE INPUT IN THE SEARCH BAR EQUATES THE NAME OR BRAND
let users = []
    
search_bar.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) ||user.brand.toLowerCase().includes(value)
        user.element.classList.toggle('card-hide', !isVisible)
    });
})




let cart = []




async function getProducts(){
    

    try{
        const response = await fetch('https://dummyjson.com/products', {mode: 'cors'})
        
        const productData = await response.json();
        
        
        users = productData.products.map(product => {
            

            const {title,description,brand,price,rating,stock,images,id} = product
            
            const content_div = document.createElement('div')
            content_div.classList.add('content')
            const content_img = document.createElement('img')
            const content_name = document.createElement('h3')
            const content_desc = document.createElement('p')
            const content_brand = document.createElement('h6')
            const content_price = document.createElement('h6')
            const content_ul = document.createElement('ul')
            const content_rating = document.createElement('li')
            let content_stock = document.createElement('li')
            const content_button = document.createElement('button')
            content_ul.append(content_rating,content_stock)
            content_div.append(content_img,content_name,content_desc,content_brand,content_price,content_ul,content_button)
            
            content_img.srcset = images[0], images[1],images[2],images[3],images[4],images[5]

            content_name.textContent = title
            content_desc.textContent = description
            content_brand.textContent = brand
            content_price.textContent = `$${price}.00`
            content_rating.textContent = `Rating: ${rating}`
            content_stock.textContent = `Stock: ${stock}`
            content_button.textContent = 'Add To Cart!'
            
            shop_items.append(content_div)
            
            
            
            //WHEN CLICKED THE PRODUCT APPEARS IN THE CART
            content_button.addEventListener('click', () => {
            console.log(product)
            content_stock.textContent = `Stock: ${stock - 1}`
            setCartItems(title,description,brand,price,images,stock,product)
            })


            return { name: product.title, brand:product.brand,element: content_div}
    
        })

        
        
    } catch(err){
        console.log(err)
    }}
    
    getProducts()
    
    
    function setCartItems(title,description,brand,price,images,stock,product){

            //RETURNS IF CART ARRAY ALREADY CONTAINS ELEMENT

            if (cart.filter(item => item.title === title).length > 0){
                
                itemAlreadyAdded()
                return
            } 
            cart.push(product)

            
            const cart_item = document.createElement('div')
            cart_item.classList.add('cart-item')
            const item_img = document.createElement('img')
            item_img.classList.add('cart-item-img')                
            const item_info = document.createElement('div')
            item_info.classList.add('item-info')
            const item_brand = document.createElement('h3')
            item_brand.classList.add('item-brand')
            const item_name = document.createElement('h3')
            item_name.classList.add('item-name')
            const item_desc = document.createElement('h5')
            item_desc.classList.add('item-desc')
            
            item_info.append(item_brand,item_name,item_desc)
            
            const item_price = document.createElement('h3')
            item_price.classList.add('item-price')
            
            const item_amount = document.createElement('input')
            item_amount.setAttribute('type','number')
            item_amount.setAttribute('id','item-amount')
            item_amount.setAttribute('class','item-amount')
            item_amount.setAttribute('min','1')
            item_amount.setAttribute('value','1')

            product.amount = Number(item_amount.value)
            item_amount.addEventListener('input',() =>{
                if(!item_amount.value) return
                product.amount = Number(item_amount.value)
                getTotalCartAmount()
            })


            const item_remove = document.createElement('button')
            item_remove.classList.add('item-remove')
            item_remove.setAttribute('id',title)
            item_remove.textContent = 'Remove'
            

            item_remove.addEventListener('click', (event) => {
                let buttonClicked = event.target
                buttonClicked.parentElement.remove()
                cart.splice(cart.indexOf(product),1)
                getTotalCartAmount()
                console.log(cart)
            })
            
            item_img.srcset =  images[0], images[1], images[2], images[3], images[4], images[5]
            

            cart_item.append(item_img,item_info,item_price,item_amount,item_remove)
            
            item_brand.textContent = brand
            item_name.textContent = title
            item_desc.textContent = description
            item_price.textContent = `$${price}.00`
            
            
            main_cart_body.append(cart_item)

            getTotalCartAmount()
            ItemAdded()           
            // localStorage.setItem(title,JSON.stringify(product))
            console.log(cart)

    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        cart.forEach(item => {
            let totalItemAmount = item.price * item.amount
            item.totalItemAmount = totalItemAmount
            totalAmount += totalItemAmount
        })
        cart.totalOrder = totalAmount
        return checkout_amount.textContent = `Total: $${totalAmount}`;
    };


function itemAlreadyAdded(){
    added_to_cart.style.backgroundColor = 'var(--f-message)'
    added_to_cart.style.border = 'var(--f-border)'
    added_to_cart.textContent = 'Item Already Added'
    added_to_cart.classList.toggle('toggle')
    setTimeout(() => added_to_cart.classList.toggle('toggle'), 2000 )
}


function ItemAdded(){
    added_to_cart.style.backgroundColor = 'var(--s-message)'
    added_to_cart.style.border = 'var(--s-border)'
    added_to_cart.textContent = 'Item Added Successfully'
    added_to_cart.classList.toggle('toggle')
    setTimeout(() => added_to_cart.classList.toggle('toggle'), 2000 )
}



function checkoutItems(){
    if(!cart.length) return checkout_amount.textContent = 'You need to add an item!'

    let user = auth.currentUser


    cart.orderNumber = orderNumber

    cart.map(item => {

        

        laptopia_firestore_db.collection('cart').doc(user.uid).set({  

            [item.id]:{...item}

            }, {merge: true})


    })

    cart = []
    console.log(cart)

    while(main_cart_body.firstChild){

        main_cart_body.removeChild(main_cart_body.firstChild)
    }
    checkout_amount.textContent = 'Thank you for your purchase!'

}



//LOCAL STORAGE FOR ADDED FUNCTIONALITY
// function getFromLocalStorage(){
//     for(let i = 0; i < localStorage.length; i++){
//         const storageItem = localStorage.key(i)
//         let getStorageItem = localStorage.getItem(storageItem)
//         const parsedItem = JSON.parse(getStorageItem)
//         const {title,description,brand,price,images} = parsedItem

//         setCartItems(title,description,brand,Number(price),images,parsedItem)
//     }

// }

// getFromLocalStorage()

