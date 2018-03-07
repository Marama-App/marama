import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getTypeDetail} from '../actions/type-details'

export class Type extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      typeDetail: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getTypeDetail(this.props.match.params.type))
  }

  render () {
    return (

      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Break Into {this.props.match.params.type}</div>
            <div className='page-title-blurb'>Here&apos;s what you can study, cool companies hiring, and resources to help you!</div>
          </div>
          <div className='type-container-study'>
            <div className='type-title-study'>
              <div className='h3-class'>Study</div>
              <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
                <button className='button-clear'>More Study Options</button>
              </Link>
            </div>
            <div className='type-section-study'>
              {this.props.typeDetails.study.filter(course => {
                return (course === this.props.typeDetails.study[0] || course === this.props.typeDetails.study[1] || course === this.props.typeDetails.study[2])
              }).map(study => (
                <div key={study.study_id} className='type-section-thumbnails'>
                  <a href={study.link} target='_blank'>{study.course}</a>
                  <div className='type-section-study-provider'>{study.provider}</div>
                  {this.props.typeDetails.location.filter(location => {
                    return (location.study_id === study.study_id)
                  }).map(location => (
                    <span key = {location.location_id} className='type-section-study-location'>{location.location} </span>
                  ))}
                </div>
              ))}
            </div>
            <hr/>
          </div>
          <div className='type-container-employment'>
            <div className='type-container-employment-box'>
              <div className='h3-class'>Employment Avenues</div>
              <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
                <button className='button-clear'>More Job Options</button>
              </Link>
            </div>
            <div className='p-class'>Get a job at one of the hottest companies in New Zealand!</div>

            <div className='type-section-employment'>
              <div className='type-section-employment-thumbnail'>
                <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
                  <img src='/images/gaming-pic-1.png' className='employment-thumbnail'/>
                </Link>
              </div>
              <div className='type-section-employment-thumbnail'>
                <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
                  <img src='/images/gaming-pic-3.png' className='employment-thumbnail'/>
                </Link>
              </div>
              <div className='type-section-employment-thumbnail'>
                <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
                  <img src='/images/gaming-pic-2.png' className='employment-thumbnail'/>
                </Link>
              </div>
              <div className='type-section-employment-thumbnail'>
                <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
                  <img src='/images/gaming-pic-4.png' className='employment-thumbnail'/>
                </Link>
              </div>
            </div>
          </div>

          <hr/>

          <div className='type-container-support'>
            <div className='type-container-support-box'>
              <div className='h3-class'>Support Services</div>
              <Link to='/support'>
                <button className='button-clear'>Support and Grants</button>
              </Link>
            </div>
            <div className='p-class'>If you&apos;re of Māori or Pacific Island decent, take a look at the grants, scholarships and support available to you.</div>
          </div>
          <div>
            <Link to={`/interests/${this.props.match.params.interest}/`}>
              <button type='transparent' className='previous-button'>Previous</button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    typeDetails: state.typeDetails
  }
}

export default connect(mapStateToProps)(Type)
