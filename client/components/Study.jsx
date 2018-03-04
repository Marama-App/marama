import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// import {getGrants} from '../actions/grants'

class Study extends React.Component {
  render () {
    return (
      <div className='type-section'>
        <h1>Study</h1>
        {this.props.typeDetails.study.map(detail => (
          <div key={detail.study_id}>
            <p>Course: {detail.course}</p>
            <p>Provider: {detail.provider}</p>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/${detail.course}`}>
              <button>See Grants for this course</button>
            </Link>
            <div>
            </div>
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

export default connect(mapStateToProps)(Study)
