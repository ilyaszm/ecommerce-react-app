import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../helpers/context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {

        const {id, title, img, price, inCart} = this.props.product

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div>
                                <div
                                className="img-container p-5"
                                onClick={ () => value.handleDetail(id) }
                                >
                                    <Link to="/details">
                                        <img src={ img } alt="product" className="card-img-top" />
                                    </Link>
                                    <button
                                    className="cart-btn"
                                    disabled={ inCart ? true : false }
                                    onClick={ () => { value.addToCart(id)} }
                                    >
                                        {
                                            inCart ?
                                            ( <p className="text-capitalize mb-0" disabled>in cart</p> ) :
                                            ( <i className="fas fa-cart-plus" />)
                                        }
                                    </button>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">
                                        { title }
                                    </p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mr-1">{ price } DH</span>
                                    </h5>
                                </div>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        title   : PropTypes.string,
        img     : PropTypes.string,
        price   : PropTypes.number,
        brand   : PropTypes.string,
        inCart  : PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`

    .card {
        border-color: transparent;
        transition: all .8s linear
    }

    .card-footer {
        background: transparent;
        border-top: transparent
    }

    &:hover {
        .card {
            border: .04rem solid rgba(0, 0, 0, .2);
            box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .2)
        }
        .card-footer {
            background: rgba(247, 247, 247)
        }
    }

    .img-container {
        position: relative;
        overflow: hidden
    }

    .card-img-top {
        transition: all .4s linear
    }

    .img-container:hover .card-img-top {
        transform: scale(1.2)
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: .2rem .4rem;
        background: var(--lightGrey);
        border: none;
        color: var(--mainWhite);
        border-radius: .5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all .4s linear
    }

    .img-container:hover .cart-btn {
        transform: translate(0, 0)
    }

    .cart-btn:hover {
        color: var(--mainGrey);
        cursor: pointer
    }

`