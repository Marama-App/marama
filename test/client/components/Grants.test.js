/* global test expect */

import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter as Router} from 'react-router'

import {Grants} from '../../../client/components/Grants'

Grants.prototype.componentDidMount = () => {}

test('<Grants /> Displays list of grants When route is accessed', () => {
  const grants = {result: [{
    grants_id: 1,
    name: 'test user 1',
    description: 'description 1',
    grant_link: 'www.test.com'
  }, {
    grants_id: 2,
    name: 'test user 2',
    description: 'description 2',
    grant_link: 'www.test.com'
  }, {
    grants_id: 3,
    name: 'test user 3',
    description: 'description 3',
    grant_link: 'www.test.com'
  }]}
  const match = {params: {
    interest: 'animation'
  }}
  const wrapper = mount(
    <Router>
      <Grants grants={grants} match={match} />
    </Router>)
  expect(wrapper.find('button').length).toBe(4)
})
