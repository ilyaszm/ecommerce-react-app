import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonContainer } from '../elements/Button'
import { ProductConsumer } from '../helpers/context'

import logo from '../../assets/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={ logo } alt="Logo" className="navbar-brand" style={{ width: "65px" }} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <ProductConsumer>
                    {value => {
                        const { cartBadge } = value
                        return (
                            <Link to="/cart" className="ml-auto">
                                <ButtonContainer>
                                    <span className="mr-2">
                                        <i className="fas fa-cart-plus" />
                                        <span class="badge badge-warning">{ cartBadge }</span>
                                    </span>
                                    my cart
                                </ButtonContainer>
                            </Link>
                        )
                    }}
                </ProductConsumer>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainGrey);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1rem;
        text-transform: capitalize
    }
`