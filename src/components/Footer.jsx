import React from 'react'
import {AiFillInstagram , AiFillFacebook ,AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <h2>@all right reserved</h2>
        <p>Follow us on:</p>
        <article>
            <a href="https://www.instagram.com" target={'blank'}><AiFillInstagram /></a>
            <a href="https://www.facebook.com" target={'blank'}><AiFillFacebook /></a>
            <a href="https://www.linkedin.com" target={'blank'}><AiFillLinkedin /></a>                 
        </article>
    </footer>
  )
}

export default Footer