import React, { Component } from 'react'

import Title from '../../elements/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../helpers/context'
import CartList from './CartList'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value
                        // If the Cart contains items, it will display the Cart table
                        if (cart.length > 0) {
                            return (
                                <div>
                                    <Title name="Cart" />
                                    <CartColumns />
                                    <CartList value={ value } />
                                </div>
                            )
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}