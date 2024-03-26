import React from 'react'
import house from './Images/house.png'
import shorts from './Images/icons8-play.gif'
import saved from './Images/icons8-video-playlist-50.png'
import you from './Images/icons8-video-48 copy.png'
import './Overlay.css'




function Overlay({ isOpen, onClose }) {
    return (
        <div>
            <div className={`overlay_sidebar ${isOpen ? 'open' : ''}`}>
                {/* <button className='close-overlay' onClick={onClose}>close</button> */}
                <button> <img src={house} width={26} />Home</button>
                <button><img src={shorts} width={26} />Shorts</button>
                <button><img src={saved} width={26} />Saved</button>
                <button><img src={you} width={26} />You</button>
            </div>
        </div>
    )
}

export default Overlay
