const cartButton = document.querySelector(".cart-btn")
const closeCartButton = document.querySelector(".close-cart")
const clearCartButton = document.querySelector(".clear-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartItems = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total")
const cartContent = document.querySelector(".cart-content")
const productsDOM = document.querySelector(".products-center")
let cartItemList = []
let buttonsDOM = []
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
                        add to cart
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

    addCartItem(item){
        const div = document.createElement('div')
        div.classList.add('cart-item')
        div.innerHTML = `<img src=${item.image} alt="product">
        <div>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <div class="fas fa-chevron-down" data-id=${item.id}></div>
        </div>`
        cartContent.appendChild(div)
        
    }
    
    getBagButtons(){
        //spread operator se usa aqui para convertir el nodelist
        //de querySelectorAll a un array
        const buttons = [...document.querySelectorAll(".bag-btn")]
        buttonsDOM = buttons
        buttons.forEach(button => {
            let id = button.dataset.id
            cartItemList = CartController.getCart()
            let inCart = cartItemList.find(item => item.id === id)
            // si el item ya esta en el carrito
            if(inCart){
                button.innerText = "In Cart"
                button.disabled = true
            }
            button.addEventListener('click',(event) => {
                event.target.innerText = "In Cart"
                event.target.disabled = true
                //obtener el producto de productos
                let cartItem = {...CartController.getProduct(id),amount:1}
                //añadir el producto al carrito
                cartItemList = [...cartItemList,cartItem]
                //guardar el carrito en el local storage  
                CartController.saveCart(cartItemList)
                //setear los valores del carrito 
                this.setCartValues(cartItemList)
                // mostrar item del carrito
                this.addCartItem(cartItem)
                // mostrar el carrito
                this.showCart()
                })
        })
       
    }
    setCartValues(cartItemList){
        let tempTotal = 0
        let itemsTotal= 0
        cartItemList.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cartItems.innerText = itemsTotal
        console.log(cartTotal,cartItems)
    }
   
   
    setupAPP(){
        let cart = CartController.getCart()
        this.setCartValues(cart)
        this.populateCart(cart)
        cartButton.addEventListener('click',this.showCart)
        closeCartButton.addEventListener('click',this.hideCart)
    }
    populateCart(cart){
        cart.forEach(item => this.addCartItem(item))
    }
    showCart(){
        cartOverlay.classList.add("transparentBcg")
        cartDOM.classList.add("showCart")
    }
    hideCart(){
        cartOverlay.classList.remove("transparentBcg")
        cartDOM.classList.remove("showCart")
    }
    //usaremos event bubbling donde se incremente
    // o se decremente el numero de items de un item
    //TODO ERROR ID IS UNDEFINED at remove-item button AND MSSES UP REFRESH STORAGE ARRAY
    cartLogic(){

        clearCartButton.addEventListener('click',()=>{
            this.clearCart()
        })
        cartContent.addEventListener('click',event => {
            if(event.target.classList.contains('remove-item')){
                
                let removeItem=event.target
                console.log(removeItem)
                let id = removeItem.dataset.id
                cartContent.removeChild(removeItem.parentElement.parentElement)
                this.removeItem(id)
            }
            else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target
                console.log(addAmount)
                let id = addAmount.dataset.id
                console.log(id)
                cartItemList = CartController.getCart()
                let temporaryItem= cartItemList.find(item => item.id ===id)
                temporaryItem.amount = temporaryItem.amount + 1
                CartController.saveCart(cartItemList)
                this.setCartValues(cartItemList)
                addAmount.nextElementSibling.innerText = temporaryItem.amount
            }
            else if(event.target.classList.contains("fa-chevron-down")){
                let lowerAmount = event.target
                let id = lowerAmount.dataset.id
                cartItemList = CartController.getCart()
                let temporaryItem = cartItemList.find(item => item.id === id)
                temporaryItem.amount = temporaryItem.amount -1
                    if(temporaryItem.amount > 0){
                        CartController.saveCart(cartItemList)
                        this.setCartValues(cartItemList)
                        lowerAmount.previousElementSibling.innerText = temporaryItem.amount
                    }
                    else{
                        cartContent.removeChild(lowerAmount.parentElement.parentElement)
                        this.removeItem(id)
                    }
            }
        })

    }
    clearCart(){
        let cartItems = cartItemList.map(item=> item.id)
        cartItems.forEach(id => this.removeItem(id))
        console.log(cartContent.children)
        while(cartContent.children.length > 0){
            cartContent.removeChild(cartContent.children[0])
        }
        this.hideCart()
    }
    removeItem(id){
        cartItemList = cartItemList.filter(item => item.id !==id)
        this.setCartValues(cartItemList)
        CartController.saveCart(cartItemList)
        let button = this.getSingleButton(id)
        button.disabled = false
        button.innerHTML = 
        `<i class="fas fa-shopping-cart"></i>add to cart`
    }
    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id)
    }
}

class CartController{
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products))
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'))
        return products.find(product => product.id === id)
    }
    static saveCart(cart){
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    static getCart(){
        return localStorage.getItem('cart')? JSON.parse
        (localStorage.getItem('cart')):[]
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI()
    const products = new Product()
    ui.setupAPP()
    products.getProducts()
    .then(products => {
        ui.displayProducts(products)
        //para que incluso al acabar la sesion y vuelva a entrar
        //los items del carrito se queden guardados
        CartController.saveProducts(products)
    }).then(() => {
        ui.getBagButtons()
        ui.cartLogic()
    })
})