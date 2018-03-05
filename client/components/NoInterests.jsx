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
          <div className='p-class'>No worries! We've got you covered. Check out these awesome resources that can help you decide what it is you are passionate about.</div>

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
