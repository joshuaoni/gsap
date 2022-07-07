import React from 'react';
import img19 from '../assets/melltoo-img1.png'
import img20 from '../assets/melltoo-img2.png'
import l from '../assets/logo.png'

const Seven = () => {
    return (
        <div className='flex seven'>
            <div className='left'>
                <div className='svg'>
                    <div className='circl circle'></div>
                </div>
                <div>
                <div>
                        <img className='logo' alt='' src={l} />
                    </div>
                    <div className='mid'>
                        <h1 className='abc'>ABC 23478</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View case study</p>
                        <p className='skip'>SKIP</p>
                    </div>
                </div>
            </div>
            <div className='abso'>
                <span>Biggest Classifieds</span>
                <h1>East Asia</h1>
                <p>Countries</p>
            </div>
            <div className='right'>
                <img className='img19' alt='' src={img19} />
                <img className='img20' alt='' src={img20} />
            </div>
        </div>
    );
}
 
export default Seven;