import React from 'react';
import img19 from '../assets/melltoo-img1.png'
import img20 from '../assets/melltoo-img2.png'
import l from '../assets/logo.png'

const G = () => {
    return (
        <div className='g'>
            <div className='top flex'>
            <img className='g1' alt='' src={img19} />
                <img className='g2' alt='' src={img20} />
            </div>
            <div className='down'>
            <div style={{width:'70%'}}>
                <img style={{width:'17rem', height:'5rem'}} alt='' src={l} />
            </div>
            <h1 style={{marginTop:'0'}}>XYZ 123</h1>
                <p>This is sample text for XYZ 123</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'7rem'}}>
                    <h4>CASE STUDY -</h4>
                    <button style={{color:'green'}}>Coming Soon</button>
                </div>
            </div>
        </div>
    );
}
 
export default G;