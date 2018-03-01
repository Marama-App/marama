import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Interest from './Interest'

const App = () => {
  return (
    <div className='app'>
      <Route path='/' component={Home} />
      <Route path='/:interest' component={Interest}/>
    </div>
  )
}

export default App
