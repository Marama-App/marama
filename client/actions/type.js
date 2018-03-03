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
    request('get', `${baseUrl}/api/v1/types`)
      .then(res => {
        dispatch(receiveType(res.body.type))
      })
      .catch((e) => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
