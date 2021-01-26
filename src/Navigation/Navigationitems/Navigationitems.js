import React from 'react'
import style from './Navigationitems.module.css'
import Navigationitem from './Navigationitem.js/Navigationitem'
function Navigationitems() {
    return (
      <ul className={style.Navigationitems}>
<Navigationitem link='/' active>Burger Builder</Navigationitem>
<Navigationitem link='/'>Checkout?</Navigationitem>
      </ul>
    )
}

export default Navigationitems
