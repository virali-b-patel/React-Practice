import React, { useState } from 'react'
import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Carousel = ({ data }) => {

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {data.slides.map((item, idx) => {
        return <img className={
          slide === idx ? "slide" : "slide-hidden"} src={item.src} alt={item.alt} key={idx} />
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {
          data.slides.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
          })
        }
      </span>
    </div>
  )
}

export default Carousel



