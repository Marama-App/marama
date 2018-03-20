/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {Interest} from '../../../client/components/Interest'

Interest.prototype.componentDidMount = () => {}

test('<Interest /> Displays list of interestTypes When route is accessed', () => {
  const interestType = [{
    type_id: 1,
    name: 'test interest type 1',
    description: 'test description 1'
  }, {
    type_id: 2,
    name: 'test interest type 2',
    description: 'test description 2'
  }, {
    type_id: 3,
    name: 'test interest type 3',
    description: 'test description 3'
  }]
  const match = {params: {
    interest: 'animation'
  }}
  const wrapper = mount(
    <Router>
      <Interest interestType={interestType} match={match}/>
    </Router>)
  expect(wrapper.find('button').length).toBe(4)
})
