const shop_items = document.getElementById('shop-items')
const search_bar = document.getElementById("search-bar")

let users = []



search_bar.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) ||user.brand.toLowerCase().includes(value)
        user.element.classList.toggle('card-hide', !isVisible)
    });
})




async function getProducts(){
    try{
    const response = await fetch('https://dummyjson.com/products', {mode: 'cors'})
    
    const productData = await response.json();
    
    users = productData.products.map(product => {

        const content_div = document.createElement('div')
        content_div.classList.add('content')
        const content_img = document.createElement('img')
        const content_name = document.createElement('h3')
        const content_desc = document.createElement('p')
        const content_brand = document.createElement('h6')
        const content_price = document.createElement('h6')
        const content_ul = document.createElement('ul')
        const content_rating = document.createElement('li')
        const content_stock = document.createElement('li')
        const content_button = document.createElement('button')
        content_ul.append(content_rating,content_stock)
        content_div.append(content_img,content_name,content_desc,content_brand,content_price,content_ul,content_button)

        content_img.srcset = product.images[0],product.images[1],product.images[2],product.images[3],product.images[4],product.images[5]
        content_name.textContent = product.title
        content_desc.textContent = product.description
        content_brand.textContent = product.brand
        content_price.textContent = `$${product.price}.00`
        content_rating.textContent = `Rating: ${product.rating}`
        content_stock.textContent = `Stock: ${product.stock}`
        content_button.textContent = 'Add To Cart!'

        shop_items.append(content_div)


        return { name: product.title, brand:product.brand,element: content_div}


    })
    
    } catch(err){
        alert(err)
    }}

    getProducts()
