import React from 'react'

import {connect} from 'react-redux'

import {getAll} from '../actions/update'

class Update extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAll())
  }

  render () {
    return (
      <div className='update-section'>
        <h1>Update</h1>
        <form>
          <input name='' placeholder='' />
          <br />
          <input name='' placeholder='' />
          <br />
          <input name='' placeholder='' />
          <br />
          <input name='' placeholder='' />
          <br />
          <input name='' placeholder='' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    update: state.update
  }
}

export default connect(mapStateToProps)(Update)
