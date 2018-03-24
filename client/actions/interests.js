import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_INTERESTS = 'RECEIVE_INTERESTS'

let baseUrl = process.env.NODE_ENV ===
'production'
  ? 'http://marama.org.nz'
  : 'http://localhost:3000'

export const receiveInterests = (interests) => {
  return {
    type: RECEIVE_INTERESTS,
    interests
  }
}

export function getInterests () {
  // eslint-disable-next-line no-console
  console.log('base url', baseUrl, process.env.NODE_ENV)
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(receiveInterests(res.body.interests))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
