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
      <div className='typedetail-section'>
        <h1>Grants for {this.props.match.params.grants}</h1>
        {this.props.grants.result.map(grant => (
          <div key={grant.grants_id}>
            <h3>{grant.name}</h3>
            <div>
              <p>{grant.description}</p>
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
