import React from 'react';
import './GoogleAdForm.css';

const GoogleAdForm = ()=>{
    return(
        <div>
            <div className='gaform'>
            <input className='email' type="email" placeholder='Your Email...' name="email"/>
            </div>
            <div>
            <input className='num' type="text" placeholder='Your Phone Number...' name="number"/>
            </div>
            <div className='btnmain'>
            <button className='gabtn'>Get Your Free Google Ads Scorecard</button>
            </div>
            <h4 className='gap'>Do not have a Google Ads account?<span>Click Here?</span> </h4>
        </div>
    )
}

export default GoogleAdForm;