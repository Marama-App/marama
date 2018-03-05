import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Study extends React.Component {
  render () {
    return (
      <div className='page-section'>
        <div className='study'>
          <div className='page-title-font'>Study in {this.props.match.params.type}</div>
          {this.props.typeDetails.study.map(detail => (
            <div key={detail.study_id}>
              <a href={detail.link} target='_blank'>{detail.course}</a>
              <div className='p-class'>Provider: {detail.provider}</div>
              <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/${detail.course}`}>
                <button>See Grants for this course</button>
              </Link>
              <div>
              </div>
            </div>
          )
          )}
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

export default connect(mapStateToProps)(Study)
