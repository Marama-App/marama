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
        <h1>Study options</h1>
        {this.props.typeDetails.study.map(detail => (
          <div key={detail.study_id}>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/${detail.course}`}>
              <p>{detail.course}</p>
            </Link>
            <p>{detail.provider}</p>
            <div>
            </div>
          </div>
        )
        )}
        <h1>Job Options</h1>
        
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
