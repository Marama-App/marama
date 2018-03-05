import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

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

      <div className='type-section'>
        <div className='page-title-font'>{this.props.match.params.type}</div>
        <div className='page-title-font'>Study</div>
        <div className='p-class'>Here's what you can study, cool companies hiring, and resources to help you!</div>


        {this.props.typeDetails.study.filter(course => {
          return (course.study_id < 4)
        }).map(detail => (
          <div key={detail.study_id}>
            <a href ={detail.link} target='_blank'>{detail.course}</a>
            <div className='provider-class'>{detail.provider}</div>
            <p>{detail.location}</p>
            <div>
            </div>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
          <button>More Study Options</button>
        </Link>
        <div className='h2-class'>Potential Employers</div>
        {this.props.typeDetails.jobs.map(job => (
          <div key={job.job_id}>
            <a href={job.job_link} target='_blank'>{job.job_name}</a>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
          <button>More Job Options</button>
        </Link>
        <div className='h2-class'>Support Services</div>

        {this.props.typeDetails.help.map(help => (
          <div key={help.id}>
            <div><h2>Iwi Grants</h2></div>
            <div><p>Are you eligilbe for an Iwi grant?</p><Link to='/iwi-grants'><button>Iwi Grants</button></Link></div>
            <div><h2>Pasifika Students</h2></div>
            <div><p>Find out if you are eligile for Pasifika Education grant</p><Link to='/pasifika-grants'><button>Pasifika Grants</button></Link></div>
          </div>

        ))}
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
