const cartButton=document.querySelector(".cart-btn")
const closeCartButton=document.querySelector(".close-cart")
const clearCartButton=document.querySelector(".clear-cart")
const cartDOM=document.querySelector(".cart")
const cartOverlay=document.querySelector(".cart-overlay")
const cartItems=document.querySelector(".cart-items")
const cartTotal=document.querySelector(".cart-total")
const cartContent=document.querySelector(".cart-content")
const productsDOM=document.querySelector(".products-center")

let cartItemList=[]
let buttonsDOM=[]

class Product{
    async getProducts(){
        try {
            let result = await fetch('products.json')
            let data = await result.json()
            let products = data.items

            products=products.map(item => {
                const {
                    title,
                    price
                }= item.fields
                const {
                    id
                }= item.sys
                const image=item.fields.image.fields.file.url
                return {
                    title,
                    price,
                    id,
                    image
                }
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }

}

class UI{
    displayProducts(products){
    let result=''
    products.forEach(product =>{
        result+=  `  <!---------------producto------------->
        <article class="product">
            <div class="img-container">
                <img class="product-img" src="${product.image}" alt="product" srcset="">
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fas fa-shopping-cart"></i>
                    añadir al carrito
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>${product.price}</h4>
        </article>
        <!---------------endproducto------------->`
    })
    productsDOM.innerHTML=result
    }
}

document.addEventListener("DOMContentLoaded",() =>{
    const ui = new UI()
    const products = new Product()
    products.getProducts()
    .then(products=>{
        ui.displayProducts(products)
    })
})



