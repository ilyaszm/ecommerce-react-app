import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h5>your cart is empty</h5>
                    <Link to="/" className="text-center text-capitalize">back to products</Link>
                </div>
            </div>
        </div>
    )
}
