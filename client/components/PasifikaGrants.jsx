import React from 'react'

import {connect} from 'react-redux'

import { getPasifikaGrants } from '../actions/pasifika-grants.js'

class PasifikaGrants extends React.Component {
  componentDidMount () {
    this.props.dispatch(getPasifikaGrants(this.props.match.params.PasifikaGrants))
  }

  render () {
    return (
      <div>
      <img src='/images/bg-stars.png' className='stars-background'/>
      <div className='page-section'>
      <div className='typedetail-section'>
        <h1>Pasifika Study</h1>
        <p>Many iwi offer a range of different grants, scholarships and funding to help support their members in areas like education and research. Opportunities like these are often overlooked if you are unaware that they are out there.
Below are list of iwi that have grants you can apply for which is available for those who are registered with the iwi. If you are unsure if you are member, you can contact your iwi directly.
        </p>
        {this.props.pasifikaGrants.map(pasifikaGrant => (
          <div key={pasifikaGrant.id}>
            <a href={pasifikaGrant.link} target='_blank'><h3>{pasifikaGrant.name}</h3></a>
            <h4>{pasifikaGrant.description}</h4>
          </div>
        ))
        }
      </div>
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
