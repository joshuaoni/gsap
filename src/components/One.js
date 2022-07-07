import React from 'react';
import img1 from '../assets/11.png';
import img2 from '../assets/12.png';
import logo from '../assets/world-communication-awards-for-best-digital-experience.png';

const One = () => {
 
    return (
        <div  className='flex one'>
            <div className='left'>
                <div className='svg'>
                    <div className='circle'></div>
                </div>
                <div>
                    <div>
                        <img className='logo' alt='' src={logo} />
                    </div>
                    <div className='mid'>
                        <h1 className='abc'>ABC 123</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View case study</p>
                        <p className='skip'>SKIP</p>
                    </div>
                </div>
            </div>
            <div className='abso'>
                <h1>25M+ Downloads</h1>
                <p>on appstore & google playstore</p>
            </div>
            <div className='right'>
                <img className='img1' alt='' src={img1} />
                <img className='img2' alt='' src={img2} />
            </div>
        </div>
    );
}
 
export default One;