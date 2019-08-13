import React, { Component } from 'react'
import { stock, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct
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

    addToCart = () => {
        console.log('hello from addtocart')
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                { this.props.children }
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer}