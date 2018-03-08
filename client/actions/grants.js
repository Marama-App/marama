import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_GRANTS = 'RECEIVE_GRANTS'

export const receiveGrants = (grants) => {
  return {
    type: RECEIVE_GRANTS,
    grants
  }
}

export function getGrants (typeDetail) {
  return (dispatch) => {
    request
      .get(`https://marama.org.nz/api/v1/grants/${typeDetail}`)
      .then(res => {
        dispatch(receiveGrants(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
