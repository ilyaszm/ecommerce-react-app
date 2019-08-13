import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../helpers/context'
import { ButtonContainer } from '../elements/Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, title, img, price, brand, info, inCart} = value.detailProduct
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>{ title }</h2>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-6 text-capitalize">
                                    <img src={ img } alt="product" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-6 text-capitalize">
                                    <h3>model: { title }</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{ brand }</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : { price }<span>DH</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        more info:
                                    </p>
                                    <p className="text-muted lead">{ info }</p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to home
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        // check if the product is in Cart to set it to true,
                                        // if not, set it to false
                                        disabled={ inCart ? true : false }
                                        onClick={() => { value.addToCart(id)}}
                                        >
                                            {/* set inCart text to "in cart" if the product in Cart,
                                                if not, set the text to "add to cart" */}
                                            { inCart ? "in cart" : "add to cart" }
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}