import React from 'react'
import Button from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-subscription-text"> 
                <h1>Join the Adventure newsletter to receive our best vacation deals</h1>
                <p>You can unsubscribe at any time.</p>
            </div>
            <div className="footer-subscription-form">
                <form>
                    <input type="email" name="email" placeholder="Your Email" autoComplete="off"/>
                    <Button 
                    className="subscription-button"
                    buttonStyle="btn--primary"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
            <div className="footer-links-containers">
                <div className="footer-links">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-links">
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className="footer-links">
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>      
                <div className="footer-links">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
            <div className="footer-social-media-section">
                <div className="logo">
                    <Link to='/'>
                        <h1>TRVL <i class='fab fa-typo3' /></h1>
                    </Link>
                </div>
                <div className="website-rights">
                    TRVL © 2020
                </div>
                <div className="social-media">
                    <Link
                     to='/'
                     target="_blank"
                    >
                        <i class='fab fa-facebook-f' />
                    </Link>
                    <Link 
                     to='/'
                     target='_blank'
                    >
                        <i class='fab fa-instagram' />
                    </Link>
                    <Link
                     to='/'
                     target='_blank'
                    >
                        <i class='fab fa-youtube' />
                    </Link>
                    <Link
                     to='/'
                     target='_blank'
                    >
                    </Link>
                    <Link
                     to='/'
                     target='_blank'
                    >
                        <i class='fab fa-twitter' />
                    </Link>
                    <Link
                     to='/'
                     target='_blank'
                    >
                        <i class='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;