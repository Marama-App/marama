import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_IWIGRANTS = 'RECEIVE-IWIGRANTS'

export const receiveIwiGrants = (iwiGrants) => {
  return {
    type: RECEIVE_IWIGRANTS,
    iwiGrants
  }
}

export function getIwiGrants () {
  return (dispatch) => {
    request
      .get(`${baseUrl}/api/v1/iwi-grants/`)
      .then(res => {
        dispatch(receiveIwiGrants(res.body.result))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting iwi grant infomation'))
      })
  }
}
