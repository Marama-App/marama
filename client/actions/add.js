import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_ALL = 'RECEIVE_ALL'

export const RECEIVE_TYPES = 'RECEIVE_TYPES'

export const receiveTypes = (interestTypes) => {
  return {
    type: RECEIVE_TYPES,
    interestTypes
  }
}

export function getTypes (interest) {
  return (dispatch) => {
    request
      .post(`https://marama.org.nz/api/v1/add`)
      .send(interest)
      .then(res => {
        dispatch(receiveTypes(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}

export function sendAddForm (formDetails) {
  return (dispatch) => {
    request
      .post(`https://marama-app.herokuapp.com/api/v1/adddb`)
      .send(formDetails)
      .end(res => {
        res.send(res)
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
