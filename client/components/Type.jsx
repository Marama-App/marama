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
        <h1>{this.props.match.params.type}</h1>
        {this.props.typeDetails.study.map(detail => (
          <div key={detail.study_id}>
            <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}/${detail.course}`}>
              <p>{detail.name}</p>
            </Link>
            <p>{detail.provider}</p>
            <p>{detail.description}</p>
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

export default connect(mapStateToProps)(Type)
