import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import ProductList from './components/layouts/ProductList'
import Details from './components/layouts/Details'
import Cart from './components/layouts/Cart'
import Default from './components/layouts/Default'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ ProductList } />
                    <Route path="/details" component={ Details } />
                    <Route path="/cart" component={ Cart } />
                    <Route component={ Default } />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App