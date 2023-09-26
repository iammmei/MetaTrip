import React from 'react'

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
        <button buttonStyle='btn--outline'> Subscribe </button>
        </form>
        </div>
      </section>
    </div>
  )
}

export default Footer
