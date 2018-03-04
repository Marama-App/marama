import React from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Jobs extends React.Component {
  render () {
    return (
      <div className='type-section'>
        <h1>Jobs in {this.props.match.params.type}</h1>
        {this.props.typeDetails.jobs.map(job => (
          <div key={job.jobs_id}>
            <a href={job.job_link} target='_blank'>{job.job_name}</a>
          </div>
        )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    typeDetails: state.typeDetails
  }
}

export default connect(mapStateToProps)(Jobs)
