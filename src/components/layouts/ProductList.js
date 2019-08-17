import React, { Component } from 'react'
import Product from './Product'
import Title from '../elements/Title'
import { ProductConsumer } from '../helpers/context'

export default class ProductList extends Component {

    render() {

        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={ product.id } product={ product } />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )

    }

}
