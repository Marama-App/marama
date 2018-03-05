import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <h3>About us</h3>
      <p>Mārama is a centralised platform for study and funding opportunities available in Aotearoa. Targeted specifically towards Māori and Pasifika students, Mārama aims to mitigate unnecessary obstacles students face when accessing grants, scholarships, and financial support information online. Our database pairs unique courses with all applicable grant information — so finding help is easier.</p>
      <p>Mārama’s primary focus is tech-based fields of study, as Māori and Pasifika perspectives are specifically underrepresented in the growing technology sector. We’re working on collating study options, funding opportunities and potential employment information with a wider focus in the near future.</p>
      <p>Our aim for Mārama is to inform and empower students to seek broader study and employment pathways, and to make available financial assistance more transparent. The outcome being more graduates moving into fields where their voices matter most.</p>

      <p><i>Te kete Mārama — to understand, to learn</i></p>
      <h3>About our Team</h3>
      <p>something about our team</p>
      <div className='about-team'>
        <div className='selfcard'>
          <img className='pic' src='/icons/stina-about.png' />
          <h5>Stina Muller</h5>
          <p>Master of the Universe</p>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/cat-about.png' />
          <h5>Catherine Fromont</h5>
          <p>Web Developer</p>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/elyse-about.png' />
          <h5>Elyse Wyatt</h5>
          <p>Web Developer</p>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/emily-about.png' />
          <h5>Emily Parkes</h5>
          <p>Web Developer</p>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/tian-about.png' />
          <h5>Tian Du Toit</h5>
          <p>Web Developer</p>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/kimmi-about.png' />
          <h5>Kimmi Rindel</h5>
          <p>Web Developer</p>
        </div>
      </div>
      <div>
        <Link to='/'>
          <button>Previous Page</button>
        </Link>
      </div>
    </div>
  )
}

export default About
