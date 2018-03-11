import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_TYPE = 'RECEIVE_TYPE'

export function receiveType (interestType) {
  return {
    type: RECEIVE_TYPE,
    interestType
  }
}

export function getType (interest) {
  return (dispatch) => {
    request('get', `https://marama-app.herokuapp.com//api/v1/types/${interest}`)
      .then(res => {
        dispatch(receiveType(res.body))
      })
      .catch((e) => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
