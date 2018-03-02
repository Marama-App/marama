import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const SEND_TYPE = 'SEND_TYPE'

export function sendType (res) {
  return {
    type: SEND_TYPE,
    interestType: res
  }
}

export function getType () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(sendType(res.body.interests))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
