const cartBtn = document.querySelector(".cart-btn")
const closeCartButton = document.querySelector(".close-cart")
const clearCartButton = document.querySelector(".clear-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-center")
let cartItemList = []

class Product {
    async getProducts() {
        try {
            let result = await fetch('products.json')
            let data = await result.json()
            let products = data.items
            
            products = products.map(item => {
                const {
                    title,
                    price
                } = item.fields
                const {
                    id
                } = item.sys
                const image = item.fields.image.fields.file.url
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

class UI {
    displayProducts(products){
        let result = ''
        products.forEach(product => {
            result += `<!-- single product -->
            <article class="product">
                <div class="img-container">
                    <img class="product-img" src=${product.image} alt="product" srcset="">
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
            </article>
            <!-- end of single product -->
            `
        })
        productsDOM.innerHTML = result
    }

    getBagButtons(){
        //spread operator se usa aqui para convertir el nodelist
        //de querySelectorAll a un array
        const buttons = [...document.querySelectorAll(".bag-btn")]
        let button_id = buttons.forEach(button => {
            let id = button.dataset.id
            let inCart = cartItemList.find(item =>  item.id === id)
            // si el item ya esta en el carrito
            if(inCart){
                button.innerText = "In Cart"
                button.disabled = true
            }
            else {
                button.addEventListener('click',(event) => {
                    event.target.innerText = "In Cart"
                    event.target.disabled = true
                    //obtener el producto de productos
                    //añadir el producto al carrito
                    //guardar el carrito en el local storage  
                    //setear los valores del carrito 
                    // mostrar item del carrito
                    // mostrar el carrito
                })
            }
        })
    }
}
class CartController{

}

class Storage {
  
}
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI()
    const products = new Product()

    products.getProducts()
    .then(products => {
        ui.displayProducts(products)
        Storage.saveProducts(products)
    }).then(() => {
        ui.getBagButtons()
    })
})