import {Link} from 'react-router-dom'
import './CardItem.css'

const CardItem = ({text,path,src,label,small}) => {
    const testWidth = small ? '333px' : '500px' 
    const fontSize = small ? '20px' : '24px' 
    console.log(`${text} , ${small}`)
    return(
        <>
        <li className="card__container" style={{width: testWidth}}>
            <Link to={path}>
                <figure className="image__container" data-category={label}>
                    <img src={src} alt="ADVENTURE"/>
                </figure>
                <div className="text__container">
                    <h2 style={{fontSize:fontSize}}>{text}</h2>
                </div>
            </Link>
        </li>
        </>
    )
}
export default CardItem;
