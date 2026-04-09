import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const ExploreBtn = () => {
        navigate('/book-new-trip')
    }
    return (
        <div className="home-bg">
            <Navbar />
            <div className='home-container'>
                <div className='home-content'>
                    <h1 className='home-title'>Travel. Relax.<br />Memories.</h1>
                    <p className='home-description'>With travel trip you can experience new travel and the<br />best tourist destinations.</p>
                    <button className='book-trip-button' onClick={ExploreBtn}>Book a New Trip</button>
                </div>
                <div className='home-image-container'>
                    <img className='home-image' src="https://res.cloudinary.com/dszpqatp5/image/upload/v1773048965/image_5_qvtavb.png" alt="traveler" />
                </div>
            </div>
        </div>
    )
}

export default Home