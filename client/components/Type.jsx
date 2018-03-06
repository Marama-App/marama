import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getTypeDetail} from '../actions/type-details'

class Type extends React.Component {
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
          <h1>Study</h1>
          {this.props.typeDetails.study.filter(course => {
            return (course === this.props.typeDetails.study[0] || this.props.typeDetails.study[1] || this.props.typeDetails.study[2])
          }).map(study => (
            <div key={study.study_id}>
              <a href={study.link} target='_blank'>{study.course}</a>
              <p>{study.provider}</p>
              {this.props.typeDetails.location.filter(location => {
                return (location.study_id === study.study_id)
              }).map(location => (
                <span key = {location.location_id}>{location.location} </span>
              ))}
            </div>
          ))}
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
            <button>More Study Options</button>
          </Link>

          <h1>Employment Avenues</h1>
          {this.props.typeDetails.jobs.map(job => (
            <div key={job.job_id}>
              <a href={job.job_link} target='_blank'>{job.job_name}</a>
            </div>
          ))}
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
            <button>More Job Options</button>
          </Link>

          <h1>Support Services</h1>
          {this.props.typeDetails.help.map(help => (
            <div key={help.id}>
              <div><h2>Iwi Grants</h2></div>
              <div>
                <p>Find out if you are eligile for an Iwi grant.</p>
                <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/iwi-grants`}>
                  <button>Iwi Grants</button>
                </Link>
              </div>
              <div><h2>Pasifika Students</h2></div>
              <div>
                <p>Find out if you are eligile for Pasifika Education grant.</p>
                <Link to='/pasifika-grants'>
                  <button>Pasifika Grants</button>
                </Link>
              </div>
            </div>
          ))}
          <div>
            <Link to={`/interests/${this.props.match.params.interest}/`}>
              <button>Previous Page</button>
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
