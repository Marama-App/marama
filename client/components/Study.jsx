import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Study extends React.Component {
  render () {
    return (

      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Study {this.props.match.params.type}</div>
            <div className='page-title-blurb'>Guess what? We&apos;ve picked out the top courses in New Zealand, and their available grants!</div>
          </div>
          {this.props.typeDetails.study.map(detail => (
            <div key={detail.study_id}>
              <a href={detail.link} target='_blank'>{detail.course}</a>
              <p>{detail.provider}</p>
              {this.props.typeDetails.location.filter(location => {
                return (location.study_id === detail.study_id)
              }).map(location => (
                <span key = {location.location_id}>{location.location} </span>
              ))}
              <br />
              <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/${detail.course}`}>
                <button>Available Grants</button>
              </Link>
            </div>
          )
          )}
          <div>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}`}>
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

export default connect(mapStateToProps)(Study)
