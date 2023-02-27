import React from 'react'
import healthassure from '../../../images/health-assure-logo.png';
import playstore from '../../../images/play-store.png';
import appstore from '../../../images/app-store.png';
import bannerbigimg from '../../../images/health-defence.png';

const Banner = () => {
  return (
    <React.Fragment>
       <div className='col-xl-6 col-lg-7 col-md-12'>
            <h1 className='first-title theme-text-blue'>YOUR FIRST LINE OF DEFENCE!</h1>
            <p className='fs-18 text-dark-blue'>Get all your medicare needs covered through one healthcare plan available at a feasible cost.</p>
            <h5 className="font-medium text-primary fs-14 mb-0">Powered By</h5>
            <img src={healthassure} alt="" className='img-fluid'/>
            <div className='d-flex align-items-center'>
            <img src={playstore} alt="" className='text-decoration-none img-fluid me-2'/>
            <img src={appstore} alt="" className='img-fluid'/>
            <p className="bg-shadow bg-white mb-0 mt-2 mt-sm-0 pe-md-4 pe-sm-2 ps-2 rounded-pill rounded-start">
                <span className="text-danger fs-14 font-medium">Need a Doctor? </span>
                <span className="fs-12 text-dark-blue">Doctor Helpline - <a href="tel:022-61676633" className="text-decoration-none text-dark-blue">022-61676633</a></span>
            </p>
            </div>
            
       </div>
       <div className='col-xl col-lg col-md text-center ms-auto'>
       <img src={bannerbigimg} alt="bannerbigimg" className='img-fluid'/>
       
       </div>
    </React.Fragment>
  )
}

export default Banner