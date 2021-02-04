import React from 'react'
import style from './Button.module.css'
function Button(props) {
    return (
        <div>
            <button disabled={props.disabled} className={[style.Button ,style[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default Button
