import React from 'react';
import { Link } from 'react-router-dom';
import './FreeTools.css';

const FreeTools = ()=>{
    return(
        <div className='freetools'>
            <div className='f_p'>
                FREETOOLS
            </div>
            <div className='ft_dropdown'>
                <ul className='ft_ul'>
                    <li className='ft_li'>
                        FREE TOOLS
                    </li>
                    <Link to='/google-ads-grader'>
                    <li className='ft_li'>
                        GOODLE ADS GRADER
                    </li>
                    </Link>
                    <Link to='/seo-site-grader'>
                    <li className='ft_li'>
                        SEO SITE GRADER
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default FreeTools;