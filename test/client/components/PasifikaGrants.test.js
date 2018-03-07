/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {PasifikaGrants} from '../../../client/components/PasifikaGrants'

PasifikaGrants.prototype.componentDidMount = () => {}

test('<PasifikaGrants /> Displays list of PasifikaGrantsTypes When route is accessed', () => {
  const pasifikaGrants = [{
    id: 1,
    name: 'test PasifikaGrants type 1',
    description: 'test description 1',
    link: 'www.link.com'
  }, {
    id: 2,
    name: 'test PasifikaGrants type 2',
    description: 'test description 2',
    link: 'www.link.com'
  }, {
    id: 3,
    name: 'test PasifikaGrants type 3',
    description: 'test description 3',
    link: 'www.link.com'
  }]
  const wrapper = mount(
    <Router>
      <PasifikaGrants pasifikaGrants={pasifikaGrants}/>
    </Router>)
  expect(wrapper.find('a').length).toBe(4)
})
