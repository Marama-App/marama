/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {IwiGrants} from '../../../client/components/IwiGrants'

IwiGrants.prototype.componentDidMount = () => {}

test('<IwiGrants /> Displays list of IwiGrantsTypes When route is accessed', () => {
  const iwiGrants = [{
    id: 1,
    iwi: 'test IwiGrants type 1',
    description: 'test description 1',
    link: 'www.link.com'
  }, {
    id: 2,
    iwi: 'test IwiGrants type 2',
    description: 'test description 2',
    link: 'www.link.com'
  }, {
    id: 3,
    iwi: 'test IwiGrants type 3',
    description: 'test description 3',
    link: 'www.link.com'
  }]
  const wrapper = mount(
    <Router>
      <IwiGrants iwiGrants={iwiGrants}/>
    </Router>)
  expect(wrapper.find('a').length).toBe(4)
})
