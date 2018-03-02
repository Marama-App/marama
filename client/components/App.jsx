import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Interest from './Interest'
import Type from './Type'
import TypeDetail from './TypeDetail'
import About from './About'
import Contact from './Contact'
import Header from './Header'
// import Grants from './Grants'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/:interests' component={Interest}/>
      <Route path='/:interests/:type' component={Type}/>
      <Route path='/:interests/:type/:type-details' component={TypeDetail}/>
    </div>
  )
}

export default App
