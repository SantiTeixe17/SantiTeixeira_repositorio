import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import  Button  from '../Button/Button'

const Navbar = (props) => {
    console.log(props)

    const handleOnClick = () => {
        alert('clickeando')
    }

    const handleOnClick2 = () => {
        alert('clickeando nuevamente')
    }

    const handleOnClick3 = () => {
        alert('clickeando nuevamente')
    }

    const handleOnClick4 = () => {
        alert('clickeando nuevamente')
    }

    return (
    <nav className='navbar'>
        <h1 style={{ color: props.colorTitle}}>Aplicación</h1>
        <Button colorText ='black' func={handleOnClick}>Inicio</Button>
        <Button colorText ='black' func={handleOnClick2}>Sobre Nosotros</Button>
        <Button colorText ='balck' func={handleOnClick3}>Contactanos</Button>
        <Button colorText ='black' func={handleOnClick4}>Registrese</Button>
        
             <CartWidget/>
    </nav>
    )
}

export default Navbar;