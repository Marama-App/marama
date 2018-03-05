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
      <div className='page-section'>
        <div className='type-section'>
          <div className='page-title-font'>{this.props.match.params.type}</div>
          <div className='page-title-font'>Study</div>
          {this.props.typeDetails.study.map(detail => (
            <div key={detail.study_id}>
              <a href ={detail.link} target='_blank'>{detail.course}</a>
              <div className='p-class'>{detail.provider}</div>
              <div>
              </div>
            </div>
          )
          )}
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study`}>
            <button>More Study Options</button>
          </Link>
          <div className='page-title-font'>Potential Employers</div>
          {this.props.typeDetails.jobs.map(job => (
            <div key={job.jobs_id}>
              <a href={job.job_link} target='_blank'>{job.job_name}</a>
            </div>
          )
          )}
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/jobs`}>
            <button>More Job Options</button>
          </Link>
          <div className='page-title-font'>Help</div>
          {this.props.typeDetails.help.map(help => (
            <div key={help.id}>
              <a href={help.help_link} target='_blank'>{help.help_name}</a>
            </div>
          ))}
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
