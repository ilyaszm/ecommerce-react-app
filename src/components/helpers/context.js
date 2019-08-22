import React, { Component } from 'react'
import { stock, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        searchWord: '',
        cartBadge: 0
    }

    componentDidMount() {
        this.setProducts()
    }

    // Update products array
    setProducts = () => {
        // create an empty temporary array for products
        let tempProducts = []
        // get and store each item(object) from data stock
        stock.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        // update the products array
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    // Get product by ID
    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    // Set detailproduct info to the clicked product
    handleDetail = id => {
        // set the product that we get by ID to a variable
        const product = this.getItem(id)
        // set the detail product info to the new product variable
        this.setState(() => {
            return { detailProduct : product }
        })
    }

    // Adding product to Cart
    addToCart = id => {
        // create a temporary products array
        let tempProducts = [...this.state.products]
        /*
            Use index, so when you change a product values,
            the values of the same product if was added to Cart will change
        */
        // get product ID and set it to an index
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]

        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        this.setState(() => {
            return {
                products: tempProducts,
                cart    : [...this.state.cart, product],
                cartBadge: this.state.cartBadge + 1
            }
        },
        // set the callback function to addTotals() when submitting a product to Cart
        () => {
            this.addTotals()
        })
    }

    openModal = id => {
        // get ID of the product
        const product = this.getItem(id)
        this.setState(() => {
            return {
                // display the product in a modal
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    // Increment the number of one product
    increment = id => {
        let tempCart = [...this.state.cart]
        // look for item that has been selected
        const selectedProduct = tempCart.find(item => item.id === id)

        // get index of the item
        const index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count += 1
        // calculate the total
        product.total = product.count * product.price

        this.setState(() => {
            return { cart: [...tempCart] }
        },
        () => {
            // reCalculate the totals
            this.addTotals()
        })
    }

    // Decrement the number of one product
    decrement = id => {
        let tempCart = [...this.state.cart]
        // look for item that has been selected
        const selectedProduct = tempCart.find(item => item.id === id)

        // get index of the item
        const index = tempCart.indexOf(selectedProduct)
        let product = tempCart[index]

        product.count -= 1

        if (product.count === 0) {
            this.removeItem(id)
            this.setState(() => { return { cartBadge: this.state.cartBadge - 1 }})
        }
        else {
            product.total = product.count * product.price

            this.setState(() => {
                return { cart: [...tempCart]}
            },
            () => {
                // reCalculate the totals
                this.addTotals()
            })
        }
    }

    // Remove product from Cart
    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]

        // filter items that doesn't have the ID which is passed in the function argument
        tempCart = tempCart.filter(item => item.id !== id)

        // get index of the item
        const index = tempProducts.indexOf(this.getItem(id))
        let removeProduct = tempProducts[index]

        // remove item from cart
        removeProduct.inCart = false
        removeProduct.count = 0
        removeProduct.total = 0

        this.setState(() => {
            return {
                cart    : [...tempCart],
                products: [...tempProducts],
                cartBadge: this.state.cartBadge - 1
            }
        },
        () => {
            // reCalculate the totals
            this.addTotals()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: [],
                cartBadge : 0
            }
        },
        () => {
            // set products to the default state
            this.setProducts()
            // reCalculate the totals
            this.addTotals()
        })
    }

    // Calculate the total price of products
    addTotals = () => {
        let subTotal = 0
        // add total of products in Cart
        this.state.cart.map(item => (subTotal += item.total))
        
        //const tempTax = subTotal * .1
        //const tax = parseFloat(tempTax.toFixed(2))
        const tax = subTotal * .1
        const total = subTotal + tax

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax     : tax,
                cartTotal   : total
            }
        })
    }

    // Handle input words to search for products
    handleChange = e => {
        this.setState({ searchWord: e.target.value })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart   : this.addToCart,
                openModal   : this.openModal,
                closeModal  : this.closeModal,
                increment   : this.increment,
                decrement   : this.decrement,
                removeItem  : this.removeItem,
                clearCart   : this.clearCart,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }