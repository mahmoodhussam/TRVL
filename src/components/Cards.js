import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return(
        <div className="cards">  
            <div className="cards-header">
                <h1>Check out these EPIC Destinations!</h1>
            </div>
            <ul className="main-cards-elements">
                <CardItem 
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                src="images/img-9.jpg"
                path="/services"
                />
                
                <CardItem
                src='images/img-2.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
                />
                </ul>
                <ul className='second-cards-elements'>
                <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
                small={true}
                />
                <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
                small={true}
                />
                <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
                small={true}
                />
            </ul>
        </div>
    )
}
export default Cards;