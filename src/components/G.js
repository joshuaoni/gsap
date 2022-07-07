import React from 'react';
import img19 from '../assets/melltoo-img1.png'
import img20 from '../assets/melltoo-img2.png'

const G = () => {
    return (
        <div className='g'>
            <div className='top flex'>
            <img className='g1' alt='' src={img19} />
                <img className='g2' alt='' src={img20} />
            </div>
            <div className='down'>
            <h1>ABC 7</h1>
                <p>This is sample text for ABC 7</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'2rem'}}>
                    <h4>CASE STUDY -</h4>
                    <button style={{color:'green'}}>Coming Soon</button>
                </div>
            </div>
        </div>
    );
}
 
export default G;