import React from 'react'
import Navbar from '../components/Navbar';
import SeoForm from '../components/SeoForm';
import img from '../images/img6.svg';
import EndFooter from './EndFooter';
import "./SEO.css"

const SEO = ()=>{
    return(
        <div>
            <Navbar/>
            <div className='seo'>
                <img src={img} alt='seo'/>
                <h2 className='seoh2'>SEO SITE GRADER</h2>
                <h1 className='seoh1'>HELP YOUR WEBSITE GET FOUND ON GOOGLE</h1>
                <h4 className='seoh4 sh4'>LXRGuide’s SEO grader gives you a free technical SEO audit report of your website in under 5 minutes. Use the information to optimize your</h4>
                <h4 className='seoh4'>website performance and ranking, and get found on Google.</h4>
                <SeoForm/>
            </div>
            <EndFooter/>
        </div>
    )
}

export default SEO;