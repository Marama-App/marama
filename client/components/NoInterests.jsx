import React from 'react'
// import {Link} from 'react-router-dom'

const noInterest = () => {
  return (
    <div>
      <img src='/images/bg-stars.png' className='stars-background'/>
      <div className='page-section'>

        <div className='type-section'>
          {/* <div className='page-title-font'>{this.props.match.params.type}</div> */}
          <div className='page-title-font'>Not sure what you want to do?</div>
          <div className='page-title-blurb'>No worries! We&apos;ve got you covered.</div>
          <div><p>We understand it can be hard trying to figure out what it is you want to do, but don&apos;t worry, there are a multitude of avenues that can take you to where you want to be. A great first step can be to find what it is that inspires and excites you and go from there. We&apos;ve put together a few resources that you might find helpful in figuring out what it is you want to study. Get exploring!</p></div>
          <div className='h2-class'>Careers New Zealand</div>
          {/* {this.props.typeDetails.help.map(help => (
              <div key={help.id}> */}
          <div><p>Study and Training Options</p></div>
          <div>
            <a href='https://www.careers.govt.nz/courses/study-and-training-options/thinking-of-study-but-not-sure-what-to-do/' target='_blank' rel="noopener noreferrer">
              <button>Learn More</button></a>

          </div>
        </div>
      </div>
    </div>

  )
}

export default noInterest
