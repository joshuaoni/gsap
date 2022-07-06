import React from 'react';
import img3 from '../assets/21.png'
import img4 from '../assets/22.png'

const Two = () => {
 

    return (
        <div className='flex two'>
            <div className='left'>
                <div className='svg'></div>
                <div>
                    <div className='mid'>
                        <h1>ABC 234</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>Coming Soon</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='circle'></div>
            <div className='flex align-end right'>
                <img className='img3' alt='' src={img3}/>
                <img className='img4' alt='' src={img4}/>
            </div>
        </div>
    );
}
 
export default Two;