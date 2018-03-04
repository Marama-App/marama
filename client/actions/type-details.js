import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_TYPE_DETAILS = 'RECEIVE_TYPE_DETAILS'

export const receiveTypeDetail = (typeDetails) => {
  return {
    type: RECEIVE_TYPE_DETAILS,
    typeDetails
  }
}

export function getTypeDetail (type) {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/type-details/${type}`)
      .then(res => {
        dispatch(receiveTypeDetail(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
