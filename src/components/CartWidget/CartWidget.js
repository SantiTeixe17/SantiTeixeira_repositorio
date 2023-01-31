import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./CartWidget.css"
import { IconName } from "react-icons/bi";

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const totalQuantity = getQuantity()

    return (
        <Link className='cartcon' to='/cart'>
            <h3>Cart: { totalQuantity }</h3>
        </Link>
    )
}

export default CartWidget