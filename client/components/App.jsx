import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <div className='app'>
      <Route path='/' component={Home} />
    </div>
  )
}

export default App
