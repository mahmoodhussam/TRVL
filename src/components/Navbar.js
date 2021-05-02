import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Button from './Button'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false)
    const handelClick = (e) => {
        setClick(!click)
        console.log(e.target)
    } 
    return(
        <div className="header">
            <Link to='/' className="logo" onClick={closeMobileMenu}>
             TRVL <i className="fab fa-typo3"/> 
            </Link>
            <nav>
                <ul className={!click ? "menu" : "mobileMenu" }>
                    <li><Link to='/'  className="item-link" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to='/services' className="item-link" onClick={closeMobileMenu}>Service</Link></li>
                    <li><Link to='/contact' className="item-link" onClick={closeMobileMenu}>Contact</Link></li>
                    <Button  
                    pathName="/sign-up"
                    buttonStyle = {!click ? 'btn--primary' : 'btn--primary btn-mobile' } 
                    buttonSize= {!click ? 'btn--medium' : 'btn--large'}
                    onClick={closeMobileMenu}>
                    Sign up
                    </Button>
                </ul>
            </nav>
            <div className={'menu-icon'} onClick={handelClick}>
                <i className={click ? 'fas fa-times' :  'fas fa-bars'}></i>
            </div>
        </div>
    )
}
export default Navbar;