import React, { Component } from 'react'
import Aux from '../../hoc/aut';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'

class Layouts extends Component{
    state={
        showBackdrop:false,
    }
    sideDrawerHandler=()=>{
        this.setState({showBackdrop:true})
      }
      closeSideDrawerHandler=()=>{
          this.setState({showBackdrop:false})
      }
     
    render(){

       
    return (
        <Aux>
    <Toolbar  showDrawer={this.sideDrawerHandler} />
    <SideDrawer open={this.state.showBackdrop} closed={this.closeSideDrawerHandler}/>
        <main className={styles.Content}>
            {this.props.children}
        </main>
        </Aux>
    )
    }
}

export default Layouts
