import React from 'react'

const noInterest = () => {
  return (
    <div>
      <img src='/images/bg-stars.png' className='stars-background' />
      <div className='page-section'>
        <div className='page-heading-section'>
          <div className='page-title-font'>Not sure what you want to do?</div>
          <div className='page-title-blurb'>No worries! We&apos;ve got you covered.</div>
        </div>
        <div className='iwi-blurb'>We understand it can be hard trying to figure out what it is you want to do, but don&apos;t worry, there are a multitude of avenues that can take you to where you want to be. A great first step can be to find what it is that inspires and excites you and go from there. We&apos;ve put together a few resources that you might find helpful in figuring out what it is you want to study. Get exploring!</div>
        <div className='careers-heading'>Careers New Zealand</div>
        <div className='careers-blurb'>Study and Training Options</div>
        <div className='careers-button-div'>
          <a className='careers-button-link' href='https://www.careers.govt.nz/courses/study-and-training-options/thinking-of-study-but-not-sure-what-to-do/' target='_blank' rel="noopener noreferrer">
            <button className='careers-button'>Learn More</button></a>

        </div>
      </div>
    </div>

  )
}

export default noInterest
