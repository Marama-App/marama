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
    this.dispatch(getTypeDetail())
  }

  render () {
    return (
      <div className='typeinfo-section'>
        <div className='header'>
          <h1> Animation
          {/* {Type} */}
          </h1>
          <p>Blurb about animation</p>
        </div>
        <div className='type'>
          <div className='typebox'>
            <h3>Study</h3>
            <p>
              Blurb about study
              {/* {data.animation.description} */}
            </p>
          </div>
          <Link to='/:interest/:type/:typedetail'>
            <button onClick={this.handleClick}>I would like to Study</button>
          </Link>
        </div>
        <div className='type'>
          <div className='typebox'>
            <h3>Jobs</h3>
            <p>
              Blurb about jobs
              {/* {data.animation.description} */}
            </p>
          </div>
          <Link to='/:interest/:type/:typedetail'>
            <button>Take me to Jobs</button>
          </Link>
        </div>
        <div className='type'>
          <div className='typebox'>
            <h3>Help</h3>
            <p>
              Blurb about Help
              {/* {data.animation.description} */}
            </p>
          </div>
          <Link to='/:interest/:type/:typedetail'>
            <button>Please Help me</button>
          </Link>
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

export default connect(mapStateToProps)(Type)
