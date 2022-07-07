import React from 'react';
import img7 from '../assets/41.png';
import img1 from '../assets/11.png';
import img10 from '../assets/44.png';
import img11 from '../assets/45.png'

const D = () => {
    return (
        <div className='d'>
            <div className='top'>
           <img  className='d4' alt='' src={img1} />
                    <img className='d1' alt='' src={img7}/>
                    <img className='d2' alt='' src={img10}/>
                    <img className='d3' alt='' src={img11}/>
            </div>
            <div className='down'>
            <h1>ABC 4</h1>
                <p>This is sample text for ABC 4</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'9rem'}}>
                    <h4>View Case Study</h4>
                    
                </div>
            </div>
        </div>
    );
}
 
export default D;