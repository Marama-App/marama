import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Home} />
      </div>
    </Router>
  )
}

export default App
