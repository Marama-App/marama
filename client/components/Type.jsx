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
        {this.props.typeDetails.study.map(detail => (
          <div key={detail.study_id}>
            <a href ={detail.link} target='_blank'>{detail.course}</a>
            <p>{detail.provider}</p>
            <div>
            </div>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
          <button>More Study Options</button>
        </Link>
        <h1>Potential Employers</h1>
        {this.props.typeDetails.jobs.map(job => (
          <div key={job.job_id}>
            <a href={job.job_link} target='_blank'>{job.job_name}</a>
          </div>
        )
        )}
        <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
          <button>More Job Options</button>
        </Link>
        <h1>Help</h1>
        {this.props.typeDetails.help.map(help => (
          <div key={help.id}>
            <a href={help.help_link} target='_blank'>{help.help_name}</a>
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
