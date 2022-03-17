import React from 'react';
import "./Solution.css";
import { Link } from 'react-router-dom';

const Solution=()=>{
    return(
        <div className='solution'>
            <div className='sp'>
            SOLUTION
            </div>
            <div className='sol_dropdown'>
                <ul className='sol_ul'>
                    <li className='li li_sol'>SOLUTION</li>
                    <Link to='/lgmpage'>
                    <li className='li li_lgm'>LXRGUIDE GROWTH MODEL</li>
                    </Link>
                    <Link to='/featuresandbenefits'>
                    <li className='li li_fb'>FEATURE & BENEFITS</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Solution;