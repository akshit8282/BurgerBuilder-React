import React from 'react'
import style from './Toolbar.module.css'
import Navigationitems from '../../Navigation/Navigationitems/Navigationitems'
import LogoBurger from '../Logo/Logo'
import DrawerToogle from '../../Navigation/SideDrawer/DrawerToogle/DrawerToogle'
function Toolbar(props) {

    return (
        <header className={style.Toolbar}>
            <DrawerToogle clicked={props.showDrawer}/>
            
            <div className={style.Logo}>
            <LogoBurger />
            </div>
            <nav className={style.DisplayNone}>
            <Navigationitems />
            </nav>
        </header>
            
        
    )
}

export default Toolbar
