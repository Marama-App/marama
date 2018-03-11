/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {Home} from '../../../client/components/Home'

Home.prototype.componentDidMount = () => {}

test('<Home /> Displays list of interests When route is accessed', () => {
  const home = [{
    id: 1,
    interests: 'test interest 1'
  }, {
    id: 2,
    interests: 'test interest 2'
  }, {
    id: 3,
    interests: 'test interest 3'
  }]
  const wrapper = mount(
    <Router>
      <Home interests={home}/>
    </Router>)
  expect(wrapper.find('button').length).toBe(4)
})
