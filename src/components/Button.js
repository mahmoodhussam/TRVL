import {Link} from 'react-router-dom'
import './Button.css'
const styles = ['btn--primary', 'btn--outline', 'btn--primary btn-mobile']
const size = ['btn--medium', 'btn--large']
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    pathName
    }) => {
        const buttonStyleCheck = styles.includes(buttonStyle) ? buttonStyle
        : styles[0]; 
        const buttonSizeCheck = size.includes(buttonSize) ? buttonSize 
        : size[0]
        return(
            <Link to={pathName}>
                <button  
                className={`btn ${buttonStyleCheck} ${buttonSizeCheck}`} 
                type={type}
                onClick={onClick}>
                    {children}
                </button>
            </Link>
        )
}
export default Button;
