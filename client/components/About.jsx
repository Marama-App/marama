import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (

    <div>
      <img src='/images/bg-stars.png' className='stars-background' />
      <div className='page-section'>
        <div className='page-heading-section'>
          <div className='page-title-font'>About Us</div>
          <div className='page-title-blurb'>Our mission, and why we exist.</div>
        </div>
        <div className='self-card-blurb'>Mārama is a centralised platform for study and funding opportunities available in Aotearoa. Targeted specifically towards Māori and Pasifika students, Mārama aims to mitigate unnecessary obstacles students face when accessing grants, scholarships, and financial support information online. Our database pairs unique courses with all applicable grant information — so finding help is easier.</div>
        <div className='self-card-blurb'>
          Mārama’s primary focus is tech-based fields of study, as Māori and Pasifika perspectives are specifically underrepresented in the growing technology sector. We’re working on collating study options, funding opportunities and potential employment information with a wider focus in the near future.</div>
        <div className='self-card-blurb'>Our aim for Mārama is to inform and empower students to seek broader study and employment pathways, and to make available financial assistance more transparent. The outcome being more graduates moving into fields where their voices matter most.</div>
        <p><i>Te kete Mārama — to understand, to learn</i></p>
        <div className='page-title-font'>Our Team</div>
        <div className='self-card-blurb'>Class of Harakeke 2018 - Enspiral Dev Academy</div>
        <div className='about-team'></div>

        <div className='selfcard'>
          <img className='pic' src='/icons/stina-about.png' />
          <h3>Stina Muller</h3>
          <div className='self-card-blurb'>Chief Creative Officer<br/>(Master)</div>
          <div className='icon' src='/icons/linkedin.png' />
          <div className='icon'>
            <a href='https://github.com/stina-muller' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://github.com/stina-muller' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>

        <div className='selfcard'>
          <img className='pic' src='/icons/cat-about.png' />
          <h3>Catherine Fromont</h3>
          <div className='self-card-blurb'>Git Master</div>
          <div className='icon'>
            <a href='https://github.com/catherinefromont' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://www.linkedin.com/in/catherine-fromont-03199a158/' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>

        <div className='selfcard'>
          <img className='pic' src='/icons/elyse-about.png' />
          <h3>Elyse Wyatt</h3>
          <div className='self-card-blurb'>Styling Master</div>
          <div className='icon'>
            <a href='https://github.com/ElyseWyatt' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://www.linkedin.com/in/elysewyatt/' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>
        <div className='selfcard'>
          <img className='pic' src='/icons/emily-about.png' />
          <h3>Emily Parkes</h3>
          <div className='self-card-blurb'>Quality Control<br/>(Master)</div>
          <div className='icon'>
            <a href='https://github.com/emilyparkes' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://www.linkedin.com/in/emilyparkes/' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>

        <div className='selfcard'>
          <img className='pic' src='/icons/tian-about.png' />
          <h3>Tian Du Toit</h3>
          <div className='self-card-blurb'>Scrum Master</div>
          <div className='icon'>
            <a href='https://github.com/tian-dutoit' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://www.linkedin.com/in/tian-du-toit-15785615a/' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>

        <div className='selfcard'>
          <img className='pic' src='/icons/kimmi-about.png' />
          <h3>Kimmi Rindel</h3>
          <div className='self-card-blurb'>Master of Some</div>
          <div className='icons'>
            <a href='https://github.com/rkimmi' target='_blank' rel="noopener noreferrer">
              <img src='/icons/github-icon.png' height='40px' />
            </a>
            <a href='https://github.com/rkimmi' target='_blank' rel="noopener noreferrer">
              <img src='/icons/linkedin-icon.png' height='40px' />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Link to='/'>
          <button className='previous-button'>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default About
