import React from 'react'
import Navbar from '../components/Navbar';
import EndFooter from './EndFooter';
import './NotFound.css';

const NotFound = ()=>{
    return(
        <div>
            <Navbar/>
        <div className='notfound'>
            <h1 className='sorry'>⚠️Sorry! page not found!😢</h1>
        </div>
        <EndFooter/>
        </div>
    )
}

export default NotFound;