import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const FETCH_INTERESTS = 'FETCH_INTERESTS'

export const fetchInterests = (interests) => {
  return {
    type: FETCH_INTERESTS,
    interests
  }
}

export function getInterests () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/interests`)
      .then(res => {
        dispatch(fetchInterests(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
