import React from 'react'
import { Link } from 'react-router-dom'
import { getType } from '../actions/type.js'
import { connect } from 'react-redux'

class Interest extends React.Component {
  componentDidMount () {
    this.props.dispatch(getType(this.props.match.params.interest))
  }

  render () {
    return (
      <div className='container'>
        <img src='/images/bg-stars.png' className='stars-background' />
        <div className='page-section'>
          <div className='page-title-font'>{this.props.match.params.interest}</div>
          <div className='p-class'>If you love this, why not help create it?! Here is what you can do to become the builder of your favourite hobby.</div>
          <div className='interest-section'>
            {this.props.interestType.map(type => (
              <div key={type.type_id} className='thumbnails'>
                <div className='h2-class'>{type.name}</div>
                <div>
                  <p>{type.description}</p>
                </div>
                <Link to={`/interests/${this.props.match.params.interest}/${type.name}`}>
                  <button className='interest-buttons'>
                    Find out more
                  </button>
                </Link>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interestType: state.interestType
  }
}

export default connect(mapStateToProps)(Interest)
