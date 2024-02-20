import React from 'react'
import images from '~/assets'
import Slider from '~/components/Layout/Slider/Slider'

function About() {
  return (
    <Slider title='about us' src={images.sliderAbout}/>
    
  )
}

export default About