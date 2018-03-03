import React from 'react'
// import { Link } from 'react-router-dom'
import { getType } from '../actions/type'
import { connect } from 'react-redux'

class Interest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getType())
  }

  render () {
    const type = this.props.type
    if (!type) {
      return null
    }
    return (
      <div className='interest-section'>
        name
        {/* <div>
          <h1>{type.id}</h1>
          {this.props.type.map(type => (
            <Link key={type.id} to={`/interests/:type/${type.id}`}>
              {/* <p>{type.name}</p> */}
            </Link>
          )
            // <p>type description</p>
          )}
        </div> */}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type
  }
}

export default connect(mapStateToProps)(Interest)
// export default Interest
