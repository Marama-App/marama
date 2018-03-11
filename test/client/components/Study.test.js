/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {Study} from '../../../client/components/Study'

Study.prototype.componentDidMount = () => {}

test('<Study /> Displays list of typeDetails.study When route is accessed', () => {
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
      <Study typeDetails={typeDetails} match={match}/>
    </Router>)
  expect(wrapper.find('a').length).toBe(7)
})
