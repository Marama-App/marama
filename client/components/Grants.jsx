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
        <div className='typedetail-section'>
          <div className='page-title-font'>Grants for {this.props.match.params.grants}</div>
          {this.props.grants.result.map(grant => (
            <div key={grant.grants_id}>
              <h3>{grant.name}</h3>
              <div>
                <div className='p-class'>{grant.description}</div>
              </div>
              <button><a href={grant.link} target='_blank'>Full Grant Info</a>
              </button>
            </div>
          )
          )}
        </div>
      </div>

            <button><a href={grant.link} target='_blank'/>
              take me there
            </button>
          </div>
        ))}
        <div>
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/study/`}>
            <button>Previous Page</button>
          </Link>
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
