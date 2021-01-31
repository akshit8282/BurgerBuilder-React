import React, { Component } from 'react';
import Layout from './components/Layouts/Layouts';
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';
import Checkout from './containers/checkout/checkout';
import {Route,Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/Order"  component={Orders}/>
          <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
        
      </div>
    )
  }
}

export default App
