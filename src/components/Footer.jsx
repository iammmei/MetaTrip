import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the adventures newsletter to receive our best vacations deals
        </p>
        <p className="footer-subscription-text">
            You can unsubscribe at anytime.
        </p>
        <div className="inputer-areas">
            <form >
         <input type="email" name='email' placeholder='your email' className='footer-input'/>
        <Button buttonStyle='btn--outline'> Subscribe </Button>
        </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us </h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Services </Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Contact Us </h2>
                <Link to='/sign-up'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
                <Link to='/'>Terms of Services </Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Social Media </h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Tiktok</Link>
                <Link to='/'>Twitter </Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Videos </h2>
                <Link to='/'>Submit videos</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencers</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to="/" className="social-logo">
                    TRAVEL
                </Link>
            </div>
            <small className="website-rights">TRAVEL  ©2023</small>
            
        </div>
      </section>
    </div>
  );
}

export default Footer
