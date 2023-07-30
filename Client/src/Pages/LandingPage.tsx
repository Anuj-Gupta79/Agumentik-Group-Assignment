import React from 'react'
import HeroBanner from '../Component/HeroBanner'
import Navbar from '../Component/Navbar'
import Content from '../Component/Content';

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroBanner/>
        <Content />
    </div>
  )
}

export default LandingPage