import React from 'react';
import img1 from '../assets/11.png';
import img2 from '../assets/12.png';

const A = () => {
    return (
        <div className='a'>
            <div className='top flex'>
                <img  className='a1' alt='' src={img1} />
                <img  className='a2' alt='' src={img2} />
            </div>
            <div className='down'>
                <h1>ABC 1</h1>
                <p>This is sample text for ABC 1</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'2rem'}}>
                    <h4>CASE STUDY -</h4>
                    <button style={{background:'#8566f2',color:'white'}}>Coming Soon</button>
                </div>
            </div>
        </div>
    );
}
 
export default A;