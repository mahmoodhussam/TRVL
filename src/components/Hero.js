import Button from './Button'
import Cards from './Cards'
import './Hero.css'
const Hero = () => {
    return( 
        <div className="hero-container">
            <video className="hero-background" src='/videos/video-1.mp4' autoPlay loop muted />
            <div className="hero-content">
                <h1 className='hero-heading'>ADVENTURE AWAITS</h1>
                <p className='hero-text'>What are you waiting for?</p>
                <div className="hero-buttons">
                    <Button
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>GET STARTED</Button>
                    <Button 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >WATCH TRAILER</Button>
            </div>
            </div>
        </div>
    )
}
export default Hero;