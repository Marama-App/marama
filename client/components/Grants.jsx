import React from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getGrants} from '../actions/grants'

class Grants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getGrants(this.props.match.params.grants))
  }

  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Grants for {this.props.match.params.grants}</div>
            <div className='page-title-blurb'>Take a look at all available grants for this course.</div>
          </div>
          <div className='grants-secton'>
            {this.props.grants.result.map(grant => (
              <div key={grant.grants_id} className='grants-box'>
                <div className='grants-box-study-stuff'>
                  <div className='grants-box-title'>
                    <div className='type-course-link'>{grant.name}</div>
                    <button className='grants-button'>
                      <a href={grant.grant_link} target='_blank'>Full Grant Info</a>
                    </button>
                  </div>
                  <div>
                    <div className='grants-page-description'>{grant.description}</div>
                  </div>
                  <div className='hr-styling-study-page'>
                    <hr />
                  </div>

                </div>
              </div>
            )
            )}
          </div>

          <div>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/`}>
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
    grants: state.grants
  }
}

export default connect(mapStateToProps)(Grants)
