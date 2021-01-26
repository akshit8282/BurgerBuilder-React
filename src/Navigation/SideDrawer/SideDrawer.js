import React from 'react'
import Logo from '../../components/Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems'
import style from './SideDrawer.module.css'
import Backdrop from '../../components/UI/backdrop/backdrop'
import Aux from '../../hoc/aut'
function SideDrawer(props) {
    let attachedCss=[style.SideDrawer,style.close];
    if(props.open){
attachedCss=[style.SideDrawer,style.open]
    }
    return (
<Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedCss.join(' ')}>
            <div className={style.Logo}><Logo/></div>
            <nav>
                            <Navigationitems/>
        </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer
