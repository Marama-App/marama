/* global test expect */

import React from 'react'
import {mount} from 'enzyme'

import {MemoryRouter as Router} from 'react-router'

import {Jobs} from '../../../client/components/Jobs'

Jobs.prototype.componentDidMount = () => {}

test.skip('<Jobs /> Displays list of typeDetails.jobs When route is accessed', () => {
  const typeDetails = {jobs: [{
    jobs_id: 1,
    name: 'test job type 1',
    link: 'www.link.com'
  }, {
    jobs_id: 2,
    name: 'test job type 2',
    link: 'www.link.com'
  }, {
    jobs_id: 3,
    name: 'test job type 3',
    link: 'www.link.com'
  }] }
  const match = {params: {
    interest: 'sport-therapy'
  }}
  const wrapper = mount(
    <Router>
      <Jobs typeDetails={typeDetails} match={match}/>
    </Router>)
  expect(wrapper.find('s').length).toBe(4)
})
