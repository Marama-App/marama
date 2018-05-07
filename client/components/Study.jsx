import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Study extends React.Component {
  render () {
    return (

      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Study {this.props.match.params.type.replace(/-/g, ' ')}</div>
            <div className='page-title-blurb'>Guess what? We&apos;ve picked out the top courses in New Zealand, and their available grants!</div>
          </div>
          <div className='study-section'>
            {this.props.typeDetails.study.map(detail => (
              <div key={detail.study_id} className='study-box'>
                <div className='study-box-title-stuff'>
                  <div className='study-box-title'>
                    <a href={detail.link} target='_blank' className='type-course-link'>{detail.course}</a>
                    <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/${detail.course}`}>
                      <button className='study-button'>Available Grants</button>
                    </Link>
                  </div>
                </div>
                <div className='study-box-provider-location'>
                  <p className='study-box-provider'>{detail.provider}</p>
                  {this.props.typeDetails.location.filter(location => {
                    return (location.study_id === detail.study_id)
                  }).map(location => (
                    <div key={location.location_id} className='study-box-location'>{location.location} </div>
                  ))}
                  <div className='hr-styling-study-page'>
                    <hr />
                  </div>
                </div>
              </div>
            )
            )}
          </div>
          <div>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}`}>
              <button className='previous-button'>Previous</button>
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
