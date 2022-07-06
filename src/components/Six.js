import React from 'react';
import tab from '../assets/erp-app-development-service.png'

const Six = () => {
    return (
        <div className='flex six'>
            <div className='left'>
                <div className='svg'></div>
                <div>
                    <div className='mid'>
                        <h1>ABC 678</h1>
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
                <img className='tab' alt='' src={tab} />
            </div>
        </div>
    );
}
 
export default Six;