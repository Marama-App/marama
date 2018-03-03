import React from 'react'

import {connect} from 'react-redux'

import {getGrants} from '../actions/grants'
// import {Link} from 'react-router-dom'

class TypeDetail extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
    this.props.dispatch(getGrants())
  }

  render () {
    return (
      <div className='typedetail-section'>
        <p>hello test</p>
        <div className='header'>
          <h1> Study
          {/* {TypeDetail} */}
          </h1>
          <p>Blurb about study</p>
        </div>
        <div className='schools'>
          {/* {this.state.interests.map(interest =>
              <Link key={study.id}to={`/${study.study}`}>
                <button>
                  {study.study}
                </button>
              </Link>
            )} */}
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

export default connect(mapStateToProps)(TypeDetail)
