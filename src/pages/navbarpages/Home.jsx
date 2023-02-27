import React from 'react'
import Metacards from '../Metacards';

import Banner from './homecomponets/Banner';

export default function Home() {
  return (
    <React.Fragment>
      <div className='container banner-home py-5 mb-3'>
        <div className='row'>
          <Banner/>
        </div>
      </div>
      <div className='container px-0'>
        <div className='row'>
          <Metacards />
        </div>
      </div>
    </React.Fragment>
  )
}
