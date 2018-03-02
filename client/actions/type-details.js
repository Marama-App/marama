import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const REQUEST_TYPE_DETAILS = 'REQUEST_TYPE_DETAILS'
export const RECEIVE_TYPE_DETAILS = 'RECEIVE_TYPE_DETAILS'

export const requestTypeDetail = () => {
  return {
    type: REQUEST_TYPE_DETAILS
  }
}

export const receiveTypeDetail = (typeDetails) => {
  return {
    type: RECEIVE_TYPE_DETAILS,
    typeDetails
  }
}

const typeDetails = [1, 2, 3, 4, 5]

export function getTypeDetail () {
  return (dispatch) => {
    dispatch(requestTypeDetail())
    request('get', `${baseUrl}/api/v1/type-details`, typeDetails)
      .then(res => {
        dispatch(receiveTypeDetail(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
