import React from 'react';
import  img12 from '../assets/51.png'
import  img13 from '../assets/52.png'
import  img14 from '../assets/53.png'
import  img15 from '../assets/54.png'
import  img16 from '../assets/55.png'

const E = () => {
    return (
        <div className='e'>
            <div className='top'>
                        <img className='e1' alt='' src={img12}/>
                        <img className='e2' alt='' src={img13}/>
                        <img className='e3' alt='' src={img14}/>
                        <img className='e4' alt='' src={img15}/>
                        <img className='e5' alt='' src={img16}/>
            </div>
            <div className='down'>
            <h1>ABC 5</h1>
                <p>This is sample text for ABC 5</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'9rem'}}>
                    <h4>View Case Study</h4>
                    
                </div>
            </div>
        </div>
    );
}
 
export default E;