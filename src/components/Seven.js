import React from 'react';
import img19 from '../assets/melltoo-img1.png'
import img20 from '../assets/melltoo-img2.png'

const Seven = () => {
    return (
        <div className='flex seven'>
            <div className='left'>
                <div className='svg'></div>
                <div>
                    <div className='mid'>
                        <h1>ABC 789</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View case study</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='circle'></div>
            <div className='right'>
                <img className='img19' alt='' src={img19} />
                <img className='img20' alt='' src={img20} />
            </div>
        </div>
    );
}
 
export default Seven;