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
        cartTotal: 0
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
                cart: [...this.state.cart, product]
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

    increment = (id) => {
        console.log('increment')
    }

    decrement = (id) => {
        console.log('decrement')
    }

    removeItem = (id) => {
        console.log('remove')
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        },
        () => {
            // set products to the default state
            this.setProducts()
            // set totals to default (0)
            this.addTotals()
        })
    }

    // 
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
                clearCart   : this.clearCart
            }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }