import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getIwiGrants} from '../actions/iwi-grants'

export class IwiGrants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getIwiGrants(this.props.match.params.IwiGrants))
  }

  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Iwi Grants</div>
            <div className='page-title-blurb'>All available grants.</div>
          </div>

          <div className='iwi-blurb'>Many iwi offer a range of different grants, scholarships and funding to help support their members in areas like education and research. If you're an iwi member, and registered, you might qualify for a grant! Unsure if you're an iwi member? We recommend contacting your iwi directly.
       </div>
        </div>
        <div className='iwi-container'>
          {this.props.iwiGrants.map(iwiGrant => (
            <div key={iwiGrant.id}>
              <div className='iwi-box'>
                <a href={iwiGrant.link} target='_blank'><h3>{iwiGrant.iwi}</h3></a>
                <h4>{iwiGrant.description}</h4>
              </div>
            </div>
          ))
          }
        </div>
        <div>
          <Link to='/support'>
            <button className='previous-button'>Previous</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    iwiGrants: state.iwiGrants
  }
}

export default connect(mapStateToProps)(IwiGrants)
