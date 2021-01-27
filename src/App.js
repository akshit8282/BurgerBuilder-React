import React, { Component } from 'react';
import Layout from './components/Layouts/Layouts';
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';
import Checkout from './containers/checkout/checkout';

export class App extends Component {
  render() {
    return (
      <div>
        <Layout><BurgerBuilder/>
        <Checkout/>
        </Layout>
        
      </div>
    )
  }
}

export default App
