import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_INTERESTS = 'RECEIVE_INTERESTS'
let test = process.env.NODE_ENV

export const receiveInterests = (interests) => {
  return {
    type: RECEIVE_INTERESTS,
    interests
  }
}

export function getInterests () {
  // eslint-disable-next-line no-console
  console.log('base url', baseUrl, 'test', test, process.env.NODE_ENV)
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
