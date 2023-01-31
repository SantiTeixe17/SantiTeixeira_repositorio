import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ product }) => {
return (   

        <div>
            <img src={product.img} alt={product.name} style={{ width: 200}}/>
            <h3>{product.name}</h3>
            <p className="precio">$ {product.price}</p>
            <Link to={`/detail/${product.id}`} className="detalle">Ver detalle</Link>
        </div>
    )
}

export default Item