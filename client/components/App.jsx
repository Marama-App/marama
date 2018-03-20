import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Type from './Type'
import Study from './Study'
import Jobs from './Jobs'
import About from './About'
import Interest from './Interest'
import Contact from './Contact'
import Header from './Header'
import Grants from './Grants'
import Add from './Add'
import IwiGrants from './IwiGrants'
import PasifikaGrants from './PasifikaGrants'
import Footer from './Footer'
import NoInterests from './NoInterests'
import Support from './Support'

const App = () => {
  return (
    <div className='app'>
      <div className='app-box'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/admin' component={Add} />
          <Route path='/support' component={Support} />
          <Route path='/iwi-grants' component={IwiGrants} />
          <Route path='/pasifika-grants' component={PasifikaGrants} />
          <Route path='/not-sure' component={NoInterests} />
          <Route path='/interests/:interest/:type/study/:grants' component={Grants}/>
          <Route path='/interests/:interest/:type/study' component={Study}/>
          <Route path='/interests/:interest/:type/jobs' component={Jobs}/>
          <Route path='/interests/:interest/:type' component={Type}/>
          <Route path='/interests/:interest' component={Interest}/>
        </Switch>
      </div>
      <div className='sticky-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
