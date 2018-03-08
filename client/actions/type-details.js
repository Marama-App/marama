import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_TYPE_DETAILS = 'RECEIVE_TYPE_DETAILS'

export const receiveTypeDetail = (typeDetails) => {
  return {
    type: RECEIVE_TYPE_DETAILS,
    typeDetails
  }
}

export function getTypeDetail (type) {
  return (dispatch) => {
    request('get', `https://marama-app.herokuapp.com//api/v1/typeDetails/${type}`)
      .then(res => {
        dispatch(receiveTypeDetail(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
