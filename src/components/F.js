import React from 'react';
import tab from '../assets/erp-app-development-service.png'

const F = () => {
    return (
        <div className='f'>
            <div className='top flex'>

            <img className='f1' alt='' src={tab} />
            </div>
            <div className='down'>
            <h1>ABC 6</h1>
                <p>This is sample text for ABC 6</p>
                <div style={{display:'flex',alignItems:'center',paddingBottom:'2rem'}}>
                    <h4>View Case Study</h4>
                </div>
            </div>
        </div>
    );
}
 
export default F;