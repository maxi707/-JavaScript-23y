import styles from './ItemDel.module.css'
import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/cartActions";

export default function ItemDel(props){
    const dispatch = useDispatch();
    const handleRemove = () =>{
        console.log(props.id)
        dispatch(removeFromCart(props.id))
    }
    return(
        <div className={styles.del} onClick={handleRemove}>X</div>
    )
}
    





