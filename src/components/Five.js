import React from 'react';
import  img12 from '../assets/51.png'
import  img13 from '../assets/52.png'
import  img14 from '../assets/53.png'
import  img15 from '../assets/54.png'
import  img16 from '../assets/55.png'


const Five = () => {
    return (
        <div className='flex five'>
            <div className='left'>
                <div className='svg'></div>
                <div>
                    <div className='mid'>
                        <h1>ABC 567</h1>
                        <p className='best'>We are the best web development company in the world</p>
                    </div>
                    <div className='flex foot'>
                        <p className='best'>View Case Study</p>
                        <p>Skip</p>
                    </div>
                </div>
            </div>
            <div className='circle'></div>
            <div className='right flex'>
                <div style={{paddingLeft:'1rem',width:'70%'}}>
                    <div className='flex' style={{height:'45%'}}>
                        <img className='img12' alt='' src={img12}/>
                        <img className='img13' alt='' src={img13}/>
                    </div>
                    <div className='flex' style={{height:'45%'}}>
                        <img className='img14' alt='' src={img14}/>
                        <img className='img15' alt='' src={img15}/>
                    </div>
                </div>
                <div className='flex' style={{alignItems:'center',width:'30%'}}>
                        <img className='img16' alt='' src={img16}/>
                </div>
            </div>
        </div>
    );
}
 
export default Five;