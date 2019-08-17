import React from 'react'
import PaypalButton from '../../elements/PaypalButton'

export default function CartTotals({ value, history }) {

    const { clearCart, cartSubTotal, cartTax, cartTotal } = value

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button
                        className="btn btn-outline-danger text-uppercase mb-3 px-4"
                        onClick={() => clearCart()}
                        type="button"
                        >
                            clear cart
                        </button>
                        <h5>
                            <span className="text-title">
                                subtotal : <strong>{ cartSubTotal } DH</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : <strong>{ cartTax } DH</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                    total : <strong>{ cartTotal } DH</strong>
                            </span>
                        </h5>
                        <PaypalButton
                            total       = { cartTotal }
                            clearCart   = { clearCart }
                            history     = { history }
                        />
                    </div>
                </div>
            </div>
        </>
    )

}
