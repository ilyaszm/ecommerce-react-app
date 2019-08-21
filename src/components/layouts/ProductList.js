import React, { Component } from 'react'
import SearchProduct from './SearchProduct'
import Product from './Product'
import Title from '../elements/Title'
import { ProductConsumer } from '../helpers/context'

export default class ProductList extends Component {

    render() {

        const { searchWord, handleChange } = this.props

        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <SearchProduct
                                value       = { searchWord }
                                handleChange= { handleChange }
                            />   
                        </div>
                        <Title title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    const { searchWord } = value

                                    // Filter the search words into a new array
                                    const filterProducts = value.products.filter(product => {
                                        // turn the search words into lower case,
                                        // if nothing has been typed then return nothing will be returned
                                        return product.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
                                    })

                                    return (
                                        filterProducts.map(product => {
                                            return <Product key={ product.id } product={ product } />
                                        })
                                    )
                                                
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )

    }

}
