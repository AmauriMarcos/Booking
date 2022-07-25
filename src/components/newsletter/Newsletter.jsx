import React from 'react'
import '../../sass/components/_newsletter.scss';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className='newsletterTitle'>Save time, save money!</h1>
      <p className='newsletterDescription'>Sign up and we'll send the best deals to you</p>
      <form className='form'>
         <input className='input' type='email' placeholder='Your email'/>
         <button type='submit' className="submitButton">Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter