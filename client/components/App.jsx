import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Interest from './Interest'
import InfoType from './InfoType'
// import InfoDetail from './InfoDetail'
// import Grants from './Grants'

const App = () => {
  return (
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route path='/gaming' component={Interest}/>
      <Route path='/gaming/:id' component={InfoType}/>
    </div>
  )
}

export default App
