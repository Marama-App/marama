import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Type from './Type'
import TypeDetail from './TypeDetail'
import About from './About'
import Interest from './Interest'
import Contact from './Contact'
import Header from './Header'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/interests/:interest/:type/:typeDetails' component={TypeDetail}/>
        <Route path='/interests/:interest/:type' component={Type}/>
        <Route path='/interests/:interest' component={Interest}/>
      </Switch>
    </div>
  )
}

export default App
