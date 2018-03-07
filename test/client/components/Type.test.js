/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {Type} from '../../../client/components/Type'

Type.prototype.componentDidMount = () => {}

test('<Type /> Displays list of typeDetails related items and filters down to three courses when route is accessed', () => {
  const typeDetails = {study: [{
    study_id: 1,
    course: 'test job type 1',
    provider: 'test provider 1',
    link: 'www.link.com'
  }, {
    study_id: 2,
    course: 'test job type 2',
    provider: 'test provider 2',
    link: 'www.link.com'
  }, {
    study_id: 3,
    course: 'test job type 3',
    provider: 'test provider 3',
    link: 'www.link.com'
  }, {
    study_id: 4,
    course: 'test job type 4',
    provider: 'test provider 4',
    link: 'www.link.com'
  }],
  location: [{
    study_id: 1,
    location_id: 1,
    location: 'Auckland'
  },
  {
    study_id: 2,
    location_id: 2,
    location: 'Auckland'
  }]
  }
  const match = {params: {
    interest: 'gaming',
    type: 'animation'
  }}
  const wrapper = mount(
    <Router>
      <Type typeDetails={typeDetails} match={match}/>
    </Router>)
  expect(wrapper.find('a').length).toBe(11)
})
