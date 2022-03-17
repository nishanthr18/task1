import React from 'react';
import "./SeoForm.css";

const SeoForm = ()=>{
    return(
        <div>
            <div>
            <input className='website' type="email" placeholder='Your Website...' name="email"/>
            </div>
            <div>
            <input className='email' type="email" placeholder='Your Email...' name="email"/>
            </div>
            <div>
            <input className='num' type="text" placeholder='Your Phone Number...' name="number"/>
            </div>
            <div className='seobutt'>
            <button className='seobtn'>Get Your Free Score Scorecard</button>
            </div>
    </div>
    )
}

export default SeoForm;