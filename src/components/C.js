import React from 'react';
import img5 from '../assets/33.png';
import img6 from '../assets/34.png';

const C = () => {
    return (
        <div className='c'>
            <div className='top flex'>

            <img className='b1' alt='' src={img6}/>
                <img className='c2' alt='' src={img5}/>
            </div>
            <div className='down'>
            <h1>ABC 3</h1>
                <p>This is sample text for ABC 3</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'2rem'}}>
                    <h4>CASE STUDY -</h4>
                    <button style={{background:'white',color:'black'}}>Coming Soon</button>
                </div>
            </div>
        </div>
    );
}
 
export default C;