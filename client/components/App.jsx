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
import Update from './Update'
import IwiGrants from './IwiGrants'
import Footer from './Footer'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/admin' component={Update} />
        <Route path='/iwi-grants' component={IwiGrants} />
        <Route path='/interests/:interest/:type/study/:grants' component={Grants}/>
        <Route path='/interests/:interest/:type/study' component={Study}/>
        <Route path='/interests/:interest/:type/jobs' component={Jobs}/>
        <Route path='/interests/:interest/:type' component={Type}/>
        <Route path='/interests/:interest' component={Interest}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
