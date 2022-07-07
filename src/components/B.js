import React from 'react';
import img3 from '../assets/21.png'
import img4 from '../assets/22.png'

const B = () => {
    return (
        <div className='b'>
            <div className='top flex'>

            <img className='b1' alt='' src={img3}/>
                <img className='b2' alt='' src={img4}/>
            </div>
            <div className='down'>
            <h1>ABC 2</h1>
                <p>This is sample text for ABC 2</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'9rem'}}>
                    <h4>CASE STUDY -</h4>
                    <button style={{background:'#bf14bf',color:'white'}}>Coming Soon</button>
                </div>
            </div>
        </div>
    );
}
 
export default B;