import React from 'react'
import images from '~/assets'
import Slider from '~/components/Layout/Slider/Slider'

function News() {
  return (
    <Slider title='the blog' src={images.sliderNews}/>
  )
}

export default News