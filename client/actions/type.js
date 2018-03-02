import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_TYPE = 'RECEIVE_TYPE'

export function receiveType (interestType) {
  return {
    type: RECEIVE_TYPE,
    interestType
  }
}

export function getType () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(receiveType(res.body.interestType))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
