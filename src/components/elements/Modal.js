import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductConsumer } from '../helpers/context'
import { ButtonContainer } from './Button'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value
                    const { img, title, price } = value.modalProduct

                    if (!modalOpen) {
                        return null
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>item added to cart</h5>
                                            <img src={ img } alt="product" className="img-fluid" />
                                            <h4>{ title }</h4>
                                            <h5 className="text-muted">price: {price} DH</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={ () => closeModal() }>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={ () => closeModal() }>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    
    #modal {
        background: var(--mainWhite)
    }
`