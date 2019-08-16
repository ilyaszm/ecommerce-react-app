import React from 'react'

export default function CartItem({ item, value }) {

    const { id, title, img, price, count, total } = item
    const { increment, decrement, removeItem } = value

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={ img }
                    alt="product"
                    style={{ width:"5rem", height:"5rem" }}
                    className="img-fluid"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span> { title }
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span> { price }
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button className="btn btn-outline-dark mx-1" onClick={() => decrement(id)}>-</button>
                        <button className="btn btn-outline-dark mx-1">{ count }</button>
                        <button className="btn btn-outline-dark mx-1" onClick={() => increment(id)}>+</button>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : { total } DH</strong>
            </div>
        </div>
    )

}
