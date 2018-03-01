import React from 'react'
// import {Link} from 'react-router-dom'

class TypeDetail extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // componentDidMount () {
  //   this.getTypeDetailInfo()
  // }

  render () {
    return (
      <div className='typedetail-section'>
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

export default TypeDetail
