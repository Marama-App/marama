import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Interest from './Interest'
import TypeInfo from './TypeInfo'
import TypeDetail from './TypeDetail'
// import Grants from './Grants'

const App = () => {
  return (
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route path='/gaming' component={Interest}/>
      <Route path='/gaming/:id' component={TypeInfo}/>
      <Route path='/gaming/:id/:study' component={TypeDetail}/>
    </div>
  )
}

export default App
