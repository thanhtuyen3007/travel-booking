import React from 'react'
import images from '~/assets'
import Slider from '~/components/Layout/Slider/Slider'

function Contact() {
  return (
    <Slider title='contact' src={images.sliderContact}/>
  )
}

export default Contact