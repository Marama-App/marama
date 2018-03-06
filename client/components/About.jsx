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
        <div className='center-text'>
          <div className='p-class'>Mārama is a centralised platform for study and funding opportunities available in Aotearoa. Targeted specifically towards Māori and Pasifika students, Mārama aims to mitigate unnecessary obstacles students face when accessing grants, scholarships, and financial support information online. Our database pairs unique courses with all applicable grant information — so finding help is easier.</div>
          <div className='p-class'><br></br>
            Mārama’s primary focus is tech-based fields of study, as Māori and Pasifika perspectives are specifically underrepresented in the growing technology sector. We’re working on collating study options, funding opportunities and potential employment information with a wider focus in the near future.</div>
          <div className='p-class'>Our aim for Mārama is to inform and empower students to seek broader study and employment pathways, and to make available financial assistance more transparent. The outcome being more graduates moving into fields where their voices matter most.</div>
          <div className='p-class'><br></br><i>Te kete Mārama — to understand, to learn</i></div>
        </div>
      </div>
      <div className='page-title-font'>Our Team</div>
      <div className='page-title-blurb'>Class of Harakeke 2018 — Enspiral Dev Academy</div>
      <div>
        <div className='selfie-row'>

          <div className='selfcard'>
            <img className='pic' src='/icons/stina-about.png' />
            <h3>Stina Muller</h3>
            <div className='p-class'>Chief Creative Officer<br></br>(Master)</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/cat-about.png' />
            <h3>Catherine Fromont</h3>
            <div className='p-class'>Git Master</div>
          </div>
          <div className='selfcard'>
            <img className='pic' src='/icons/elyse-about.png' />
            <h3>Elyse Wyatt</h3>
            <div className='self-card-blurb'>Styling Master</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/emily-about.png' />
            <h3>Emily Parkes</h3>
            <div className='p-class'>Ticket Master</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/tian-about.png' />
            <h3>Tian du Toit</h3>
            <div className='p-class'>Scrum Master</div>
          </div>

          <div className='selfcard'>
            <img className='pic' src='/icons/kimmi-about.png' />
            <h3>Kimmi Rindel</h3>
            <div className='p-class'>Master of Some </div>
          </div>
        </div>
        <div>
          <Link to='/'>
            <button>Previous Page</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
