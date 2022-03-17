import React from 'react'
import './App.js';
import { lazy,Suspense } from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './screens/LoginPage.js';
import Loading from './components/Loading.js';
import Signup from './screens/Signup.js';
import SolutionPage from './screens/SolutionPage';
import NotFound from './screens/NotFound.js';
import FB from './screens/FB.js';
import GoogleAds from './screens/GoogleAds.js';
import SEO from './screens/SEO.js';
const Landing = lazy(()=>import( './screens/Landing.js'))


const App = ()=>{
  return(
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<Loading/>}><Landing/></Suspense>}/>
        <Route exact path="/loginpage" element={<LoginPage/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/lgmpage' element={<SolutionPage/>}/>
        <Route exact path='/featuresandbenefits' element={<FB></FB>}/>
        <Route exact path='/google-ads-grader' element={<GoogleAds/>}/>
        <Route exact path='/seo-site-grader' element={<SEO/>}/>
        <Route exactn path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;