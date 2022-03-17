import React from 'react'
import Navbar from '../components/Navbar'
import img from '../images/img5.svg';
import GoogleAdForm from '../components/GoogleAdForm';
import "./GoogleAds.css";
import EndFooter from './EndFooter';

const GoogleAds = ()=>{
    return(
        <div>
            <Navbar/>
            <div className='googleads'>
                <img src={img} alt='googleads'/>
                <h3 className='gah3'>GOOGLE ADS GRADER</h3>
                <h1 className='gah1'>IDENTIFY GAPS IN YOUR GOOGLE ADS CAMPAIGN WITHIN MINUTES</h1>
                <h4 className='gah4 f-line'>LXRGuide’s Google ads grader can give you a free technical paid search audit report in under 5 minutes. Use the information to optimize your</h4>
                <h4 className='gah4'>account performance and increase conversions.</h4>
                <GoogleAdForm/>
            </div>
            <EndFooter/>        
        </div>
    )
}

export default GoogleAds;



