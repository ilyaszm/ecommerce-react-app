import React, { Component } from 'react'
import Title from '../elements/Title'
import { ProductConsumer } from '../helpers/context'

export default class SearchProduct extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                {value => {
                    const { searchWord, handleChange } = value

                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                                    <Title name="search" title="for products"></Title>
                                    <form className="mt-4">
                                        <div className="input-group">
                                            <input
                                                type        = "text"
                                                name        = "search"
                                                id          = "txtSearch"
                                                placeholder = "Search..."
                                                className   = "form-control"
                                                defaultValue= { searchWord }
                                                onChange    = { handleChange }
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
                </ProductConsumer>
            </>
        )
    }
}
