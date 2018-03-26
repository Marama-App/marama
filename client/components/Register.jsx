import React from 'react'

import AdminRegistration from './registration/Admin'
import StudentsRegistration from './registration/Students'
import OrgsRegistration from './registration/Orgs'

const ADMIN = 'ADMIN'
const STUDENTS = 'STUDENTS'
const ORGS = 'ORGS'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: STUDENTS
    }
    this.getTabSelector = this.getTabSelector.bind(this)
  }

  getTabSelector (tab) {
    return () => this.setState({activeTab: tab})
  }

  render () {
    const adminTab = this.state.activeTab === ADMIN ? 'is-active' : ''
    const studentsTab = this.state.activeTab === STUDENTS ? 'is-active' : ''
    const orgsTab = this.state.activeTab === ORGS ? 'is-active' : ''
    return (
      <div className='register'>
        <section className='section'>
          <div className='content'>
            <h1>Registration</h1>
          </div>
          <p className='content'>
            <span className='bold'>IMPORTANT:</span> All registrations must be approved by an admin. If you do not receive a welcome email within 24 hours, please contact us at <a href="mailto:medals@devacademy.co.nz">medals@devacademy.co.nz</a>.
          </p>
          <div className="tabs is-fullwidth is-boxed is-large">
            <ul>
              <li className={studentsTab} onClick={this.getTabSelector(STUDENTS)}>
                <a>
                  <span className="icon"><i className="fa fa-graduation-cap"></i></span>
                  <span>Students</span>
                </a>
              </li>
              <li className={adminTab} onClick={this.getTabSelector(ADMIN)}>
                <a>
                  <span className="icon"><i className="fa fa-user"></i></span>
                  <span>Mārama Team</span>
                </a>
              </li>
              <li className={orgsTab} onClick={this.getTabSelector(ORGS)}>
                <a>
                  <span className="icon"><i className="fa fa-building"></i></span>
                  <span>Organisations and Institutions</span>
                </a>
              </li>
            </ul>
          </div>
          {studentsTab && <StudentsRegistration />}
          {adminTab && <AdminRegistration />}
          {orgsTab && <OrgsRegistration />}
        </section>
      </div>
    )
  }
}

export default Register
