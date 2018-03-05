import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_ALL = 'RECEIVE_ALL'

export const receiveAll = (all) => {
  return {
    type: RECEIVE_ALL,
    all
  }
}

export const RECEIVE_TYPES = 'RECEIVE_TYPES'

export const receiveTypes = (interestTypes) => {
  return {
    type: RECEIVE_TYPES,
    interestTypes
  }
}

export function getAll () {
  return (dispatch) => {
    request
      .get(`${baseUrl}/api/v1/update`)
      .then(res => {
        dispatch(receiveAll(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}

export function getTypes (interest) {
  return (dispatch) => {
    request
      .post(`${baseUrl}/api/v1/update`)
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
      .post(`${baseUrl}/api/v1/update`)
      .send(formDetails)
      .then(res => {
        dispatch(receiveAll(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
