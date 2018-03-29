import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Support from './Support'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import IwiGrants from './IwiGrants'
import PasifikaGrants from './PasifikaGrants'
import NoInterests from './NoInterests'
import Grants from './Grants'
import Study from './Study'
import Jobs from './Jobs'
import Type from './Type'
import Interest from './Interest'
import Footer from './Footer'

class App extends React.Component {
  // componentDidMount () {
  //   this.setToken()
  // }

  // setToken () {
  //   const queryString = this.props.location.search
  //   const token = new URLSearchParams(queryString).get('token')
  //   if (token) {
  //     localStorage.setItem('token', token)
  //   }
  // }
  render () {
    return (
      <div className='app'>
        <div className='app-box'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/support' component={Support} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/register' component={Register} />
            <Route path='/iwi-grants' component={IwiGrants} />
            <Route path='/pasifika-grants' component={PasifikaGrants} />
            <Route path='/not-sure' component={NoInterests} />
            <Route path='/interests/:interest/:type/study/:grants' component={Grants} />
            <Route path='/interests/:interest/:type/study' component={Study} />
            <Route path='/interests/:interest/:type/jobs' component={Jobs} />
            <Route path='/interests/:interest/:type' component={Type} />
            <Route path='/interests/:interest' component={Interest} />
          </Switch>
        </div>
        <div className='sticky-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
