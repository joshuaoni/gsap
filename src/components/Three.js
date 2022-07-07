import React from 'react';
import img5 from '../assets/33.png';
import img6 from '../assets/34.png';
import nasa from '../assets/nasa.png'


const Three = () => {
    return (
        <div className='flex three'>
            <div className='left'>
                <div className='svg'>
            <div className='circle'></div>

                </div>
                <div>
                    <div className='mid'>
                        <h1>ABC 345</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>Coming Soon</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='abso'>
            <span >Powered By Advance</span><br/>
                
            <img style={{marginTop:'0.5rem'}} className='nasa' alt='' src={nasa}/>
                <p>algorithms</p>
            </div>
            <div className='flex align-end right'>
                <img className='img6' alt='' src={img6}/>
                <img className='img5' alt='' src={img5}/>
            </div>
        </div>
    );
}
 
export default Three;