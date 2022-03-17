import React from 'react'
import solution from '../images/solution.png';
import Navbar from '../components/Navbar';
import "./SolutionPage.css";
import EndFooter from './EndFooter';


const SolutionPage = ()=>{
    return(
        <div>
            <Navbar/>
            <div className='sol_img'>
            <img src={solution} alt='solution'/>
            <h3 className='gm'>GROWTH MODEL</h3>
            <h1 className='lgr'>THE LXRGUIDE GROWTH MODEL</h1>
            <h4 className='pm'>A Proven Model to Grow Your Business</h4>
            <button className='s_btn'>Book your free growth call</button>
            </div>
            <EndFooter/>
        </div>
    )
}

export default SolutionPage;