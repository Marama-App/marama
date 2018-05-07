import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getType } from '../actions/type'

export class Interest extends React.Component {
  componentDidMount () {
    this.props.dispatch(getType(this.props.match.params.interest))
  }

  render () {
    return (
      <div>

        <img src='/images/bg-stars.png' className='stars-background' />
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>{this.props.match.params.interest}</div>
            <div className='page-title-blurb'>If you love this, why not help create it? Here&apos;s what you can do to become the builder of your favourite hobby.</div>
          </div>

          <div className='three-container'>
            <div className='interest-section'>

              {this.props.interestType.map(type => (
                <div key={type.type_id} className='interest-page-thumbnails'>
                  <div className='h3-class'>{type.name.replace(/-/g, ' ')}</div>
                  <div>
                    <div className='thumbnail-p-text'>{type.description}</div>
                  </div>
                  <Link to={`/interests/${this.props.match.params.interest}/${type.name}`}>
                    {/*  */}
                    <button className='interest-buttons'>
                      Find out more
                    </button>
                  </Link>
                </div>
              )
              )}
            </div>
          </div>
          <Link to='/'>
            <button className='previous-button'>Previous</button>
          </Link>
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
