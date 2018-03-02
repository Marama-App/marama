import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_GRANTS = 'RECEIVE_GRANTS'

export const receiveGrants = (grants) => {
  return {
    type: RECEIVE_GRANTS,
    grants
  }
}

export function getGrants () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(receiveGrants(res.body.grants))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
