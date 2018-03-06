import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (

    <div>
      <img src='/images/bg-stars.png' className='stars-background'/>
      <div className='page-section'>
        <div className='page-heading-section'>
          <div className='page-title-font'>About Us</div>
          <div className='page-title-blurb'>Our mission, and why we exist.</div>
        </div>
        <div className='p-class'>Mārama is a centralised platform for study and funding opportunities available in Aotearoa. Targeted specifically towards Māori and Pasifika students, Mārama aims to mitigate unnecessary obstacles students face when accessing grants, scholarships, and financial support information online. Our database pairs unique courses with all applicable grant information — so finding help is easier.</div>
        <div className='p-class'>
            Mārama’s primary focus is tech-based fields of study, as Māori and Pasifika perspectives are specifically underrepresented in the growing technology sector. We’re working on collating study options, funding opportunities and potential employment information with a wider focus in the near future.</div>
        <div className='p-class'>Our aim for Mārama is to inform and empower students to seek broader study and employment pathways, and to make available financial assistance more transparent. The outcome being more graduates moving into fields where their voices matter most.</div>
        <p><i>Te kete Mārama — to understand, to learn</i></p>
        <div className='page-title-font'>About our Team</div>
        <div className='p-class'>Something about our team.</div>
        <div className='about-team'>

          <div className='selfcard'>
            <img className='pic' src='/icons/cat-about.png' />
            <h5>Catherine Fromont</h5>
            <div className='p-class'>Web Developer</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/elyse-about.png' />
            <h5>Elyse Wyatt</h5>
            <div className='p-class'>Web Developer</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/emily-about.png' />
            <h5>Emily Parkes</h5>
            <div className='p-class'>Web Developer</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/stina-about.png' />
            <h5>Stina Muller</h5>
            <div className='p-class'>Master of the Universe</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/tian-about.png' />
            <h5>Tian Du Toit</h5>
            <div className='p-class'>Web Developer</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/kimmi-about.png' />
            <h5>Kimmi Rindel</h5>
            <div className='p-class'>Web Developer</div>
          </div>
          <div>
            <Link to='/'>
              <button className='previous-button'>Previous Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
