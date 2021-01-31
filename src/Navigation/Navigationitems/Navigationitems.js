import React from 'react'
import style from './Navigationitems.module.css'
import Navigationitem from './Navigationitem.js/Navigationitem'
function Navigationitems() {
    return (
      <ul className={style.Navigationitems}>
<Navigationitem link='/' >Burger Builder</Navigationitem>
<Navigationitem link='/Order'>Orders</Navigationitem>
      </ul>
    )
}

export default Navigationitems
