import React from 'react';
import tab from '../assets/erp-app-development-service.png'

const Six = () => {
    return (
        <div className='flex six'>
            <div className='left'>
                <div className='svg'>

            <div className='circle'></div>
                </div>
                <div>
                    <div className='mid'>
                        <h1>ABC 678</h1>
                        <p className='best'>Best since 2017<br/>We offer wide range of web development and mobile development</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View case study</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='abso'>
                <span>Developing ERP Solution For</span>
                <h1>Text Headline</h1>
                <p>in furniture industry</p>
            </div>
            <div className='right'>
                <img className='tab' alt='' src={tab} />
            </div>
        </div>
    );
}
 
export default Six;