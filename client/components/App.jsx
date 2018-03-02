import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Type from './Type'
import TypeDetail from './TypeDetail'
import About from './About'
import Interest from './Interest'
import Contact from './Contact'
import Header from './Header'
// import Grants from './Grants'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Route path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />
      <Route path='/:interest' component={Interest}/>
      <Route path='/interests/:interest/:type' component={Type}/>
      <Route path='/interests/:interest/:type/:typedetail' component={TypeDetail}/>
    </div>
  )
}

export default App
