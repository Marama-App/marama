import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Interest from './Interest'
import Type from './Type'
import TypeDetail from './TypeDetail'
// import Grants from './Grants'

const App = () => {
  return (
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      {/* <Route path='/contact' component={Contact} /> */}
      <Route path='/:interest' component={Interest}/>
      <Route path='/gaming/:id' component={Type}/>
      <Route path='/gaming/:id/:study' component={TypeDetail}/>
    </div>
  )
}

export default App
