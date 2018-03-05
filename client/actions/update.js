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
