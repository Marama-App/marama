import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const REQUEST_GRANTS = 'FETCH_GRANTS'

export const requestGrants = (grants) => {
  return {
    type: REQUEST_GRANTS,
    grants
  }
}

export function receiveGrants () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(requestGrants(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
