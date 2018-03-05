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
      <div className='type-section'>
        <h1>{this.props.match.params.type}</h1>
        <h1>Study</h1>

        {this.props.typeDetails.study.filter(course => {
          return (course.study_id < 4)
        }).map(detail => (
          <div key={detail.study_id}>
            <a href ={detail.link} target='_blank'>{detail.course}</a>
            <p>{detail.provider}</p>
            <p>{detail.location}</p>
            <div>
            </div>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
          <button>More Study Options</button>
        </Link>
        <h1>Employment Avenues</h1>
        {this.props.typeDetails.jobs.map(job => (
          <div key={job.job_id}>
            <a href={job.job_link} target='_blank'>{job.job_name}</a>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
          <button>More Job Options</button>
        </Link>
        <h1>Support Services</h1>

        {this.props.typeDetails.help.map(help => (
          <div key={help.id}>
            <div><h2>Iwi Grants</h2></div>
            <div><p>Are you eligilbe for an Iwi grant?</p><Link to='/iwi-grants'><button>Iwi Grants</button></Link></div>
            <div><h2>Pasifika Students</h2></div>
            <div><p>Find out if you are eligile for Pasifika Education grant</p><Link to='/pasifika-grants'><button>Pasifika Grants</button></Link></div>
          </div>

        ))}
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
