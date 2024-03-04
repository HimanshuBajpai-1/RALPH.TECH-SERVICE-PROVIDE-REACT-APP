
import svg from '../assets/svg1.svg'
import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillFacebook , AiFillLinkedin  , AiFillApple} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home1' id='home'>
            <div>
                <h1>Ralph.tech</h1>
                <p>solution provider of all modern problems...</p>
            </div>            
        </div>
        <div className='home2' id='about'>
            <div className='content'>                
                <img src={svg} alt="logo" />
                <p>We are the world's biggest solution provider</p>                 
            </div>          
        </div>
        <div className='home3' id='brands'>
            <div>
                <h1>Our Brands</h1>
                <article>
                    <div>
                        <AiFillGoogleCircle /> 
                        <p>Google</p>
                    </div>
                    <div>
                        <AiFillAmazonCircle /> 
                        <p>Amazon</p>
                    </div>
                    <div>
                        <AiFillFacebook /> 
                        <p>Facebook</p>
                    </div>
                    <div>
                        <AiFillApple /> 
                        <p>Apple</p>
                    </div>
                    <div>
                        <AiFillLinkedin /> 
                        <p>LinkedIn</p>
                    </div>                    
                </article>
            </div>
        </div>
    </>
  )
}

export default Home