import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getIwiGrants} from '../actions/iwi-grants'

class IwiGrants extends React.Component {
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

          <div className='p-class'>Many iwi offer a range of different grants, scholarships and funding to help support their members in areas like education and research. Opportunities like these are often overlooked if you are unaware that they are out there.
Below are list of iwi that have grants you can apply for which is available for those who are registered with the iwi. If you are unsure if you are member, you can contact your iwi directly.
          </div>
        </div>
        {this.props.iwiGrants.map(iwiGrant => (
          <div key={iwiGrant.id}>
            <a href={iwiGrant.link} target='_blank'><h3>{iwiGrant.iwi}</h3></a>
            <h4>{iwiGrant.description}</h4>
          </div>
        ))
        }
        <div>
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}`}>
            <button>Previous Page</button>
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