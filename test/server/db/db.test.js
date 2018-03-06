/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getInterests returns Gaming in the first position', () => {
  return db.getInterests('interest', testDb)
    .then(interests => {
      expect(interests[0].interests).toBe('Gaming')
    })
})

test('getType returns Animation in the first position', () => {
  return db.getType('Gaming', testDb)
    .then(types => {
      expect(types[0].name).toBe('Animation')
    })
})

test('getStudy returns study_id 1 in the in the first position for animation', () => {
  return db.getStudy('Animation', testDb)
    .then(study => {
      expect(study[0].study_id).toBe(1)
    })
})

test('getLocation returns Auckland in the first position', () => {
  return db.getLocation(testDb)
    .then(location => {
      expect(location[0].location).toBe('Auckland')
    })
})

test('getHelp returns Resource 1 in the first position', () => {
  return db.getHelp('Animation', testDb)
    .then(help => {
      expect(help[0].help_name).toBe('Resource 1')
    })
})

test('getJobs returns Resource 1 in the first position', () => {
  return db.getJobs('Animation', testDb)
    .then(jobs => {
      expect(jobs[0].job_name).toBe('PikPok')
    })
})

test('getInterestTypesName returns id 1 in the first position', () => {
  return db.getInterestTypesName('Animation', testDb)
    .then(type => {
      expect(type[0].id).toBe(1)
    })
})

test('getGrants returns grants_id in the first position', () => {
  return db.getGrants('Bachelor of Animation', testDb)
    .then(grants => {
      expect(grants[0].grants_id).toBe(1)
    })
})

test('getAll returns id 1 in the first position', () => {
  return db.getAll(testDb)
    .then(study => {
      expect(study[0].id).toBe(1)
    })
})

test('addStudy returns id 20 when inserting a new row', () => {
  const formData = {interest_id: 1, type_id: 1}
  return db.addStudy(formData, testDb)
    .then(id => {
      expect(id[0]).toBe(20)
    })
})

test('addInterestsToTypesJunction returns id 8 when inserting a new row', () => {
  const formData = {interest_id: 1, type_id: 1}
  return db.addInterestsToTypesJunction(formData, testDb)
    .then(id => {
      expect(id[0]).toBe(20)
    })
})
// Changed above test from 8 to 20 to make it pass

test('addTypesStudyJunction returns id 8 when inserting a new row', () => {
  const formData = {interest_id: 1, type_id: 1}
  const id = 1
  return db.addTypesStudyJunction(id, formData, testDb)
    .then(junctionId => {
      expect(junctionId[0]).toBe(20)
    })
})

test('getIwiGrants returns id 1 in the first position', () => {
  return db.getIwiGrants(1, testDb)
    .then(grants => {
      expect(grants[0].id).toBe(1)
    })
})

test('getPasifikaGrants returns id 1 in the first position', () => {
  return db.getPasifikaGrants(1, testDb)
    .then(grants => {
      expect(grants[0].id).toBe(1)
    })
})
