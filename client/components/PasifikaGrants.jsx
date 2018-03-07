import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getPasifikaGrants} from '../actions/pasifika-grants'

export class PasifikaGrants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getPasifikaGrants(this.props.match.params.PasifikaGrants))
  }

  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Pasifika Grants</div>
            <div className='page-title-blurb'>All available grants.</div>
          </div>
          <div className='iwi-blurb'>There are many scholarships, grants and funding available to Pasifika students - sometimes the biggest barriers can be just knowing where to look. We have listed some really good resources on where and how to apply for scholarships and grants.</div>
        </div>
        <div className='iwi-container'>
          {this.props.pasifikaGrants.map(pasifikaGrant => (
            <div key={pasifikaGrant.id}>
              <div className='iwi-box'>
                <a href={pasifikaGrant.link} target='_blank'><h3>{pasifikaGrant.name}</h3></a>
                <h4>{pasifikaGrant.description}</h4>
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
    pasifikaGrants: state.pasifikaGrants
  }
}

export default connect(mapStateToProps)(PasifikaGrants)
