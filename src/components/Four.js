import React from 'react';
import img7 from '../assets/41.png';
import img8 from '../assets/42.png';
import img9 from '../assets/43.png';
import img10 from '../assets/44.png';
import img11 from '../assets/45.png'

const Four = () => {
    return (
        <div className='flex four'>
            <div className='left'>
                <div className='svg'>

            <div className='circle'></div>
                </div>
                <div>
                    <div className='mid'>
                        <h1>ABC 456</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View Case Study</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='abso'>
                <span>Redefining</span>
                <h1> UX Strategy</h1>
                <p>and UX Dedign</p>
            </div>
            <div className='right'>
                <div style={{height:'60%'}} className='flex'>
                    <img className='img7' alt='' src={img7}/>
                    <img className='img10' alt='' src={img10}/>
                    <img className='img9' alt='' src={img9}/>
                </div>
                <div style={{height:'30%'}}>
                    <img className='img11' alt='' src={img11}/>
                    <img className='img8' alt='' src={img8}/>
                </div>
            </div>
        </div>
    );
}
 
export default Four;