import React from 'react';
import "./TopFooter.css";
import footerlogo from '../images/footerlogo.png';
import f1 from '../images/f1.png';
import f2 from '../images/f2.png';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import Connection from './Connection';

const TopFooter = ()=>{
    return(
        <div className='topfooter'>
            <div className='top1'>
                <img className='flogo' src={footerlogo} alt='footerlogo'/>
                <h3 className='fh3 fh1'>support@lxrguide.com</h3>
                <h3 className='fh3 fh2'> 609 356 5112</h3>
                <h3 className='fh3 fh3'> 3 Independence Way, Suite #203</h3>
                <h3 className='fh3 fh4'>Princeton, NJ 08540 USA</h3>
            </div>
            
            <div className='top2'>
                <div className='topA'>
                <h3 className='fn fh5'>Features & Benefits</h3>
                <h3 className='fn fh6'>Pricing</h3>
                <h3 className='fn fh7'>Blog</h3>
            </div>
            <div className='topB'>
                <h3 className='fn'>Terms of Services</h3>
                <h3 className='fn'>News</h3>
                <h3 className='fn'>Privacy Policy</h3>
                <h3 className='fn'>About us</h3>
            </div>
            </div>
            <div className='top3'>
                <div className='topc'>
                   <h3 className='findus'> Stay Connected. Find us on.</h3>
                   <Connection/>
                </div>
                <div className='imgdiv'>
                <div className='topd'>
                    <img className='images' src={f1} alt='f1'/>
                    <img className='images' src={f2} alt='f2'/>
                </div>
                <div className='tope'>
                    <img className='images' src={f3} alt='f3'/>
                    <img className='images' src={f4} alt='f4'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TopFooter