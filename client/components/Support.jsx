import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div>

      <img src='/images/bg-stars.png' className='stars-background' />
      <div className='page-section'>
        <div className='page-heading-section'>
          <div className='page-title-font'>Support Services</div>
          <div className='page-title-blurb'>Are you eligable for a grant? Find out.</div>
        </div>

        <div className='selfie-row'>
          <div className='selfcard'>
            <h2>Iwi Grants</h2>
            <div> <img className='support-img' src="/images/maoricarving.jpg" /></div>
            <div>
              <Link to='/iwi-grants'>
                <button>Iwi Grants</button>
              </Link>
            </div>
          </div>

          <div className='selfcard'>
            <h2>Pasifika Grants</h2>
            <div> <img className='support-img' src="/images/polyart.jpg" /></div>
            <div>
              <Link to='/pasifika-grants'>
                <button>Pasifika Grants</button>
              </Link>
            </div>
          </div>

          <div className='selfcard'>
            <h2>General Grants</h2>
            <div> <img className='support-img' src="/images/studying.jpg" /></div>
            <div>
              <Link to='/'>
                <button>General Grants</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Support
