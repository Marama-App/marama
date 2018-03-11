import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_PASIFIKAGRANTS = 'RECEIVE-PASIFIKAGRANTS'

export const receivePasifikaGrants = (pasifikaGrants) => {
  return {
    type: RECEIVE_PASIFIKAGRANTS,
    pasifikaGrants
  }
}

export function getPasifikaGrants () {
  return (dispatch) => {
    request
      .get(`https://marama-app.herokuapp.com/api/v1/pasifika-grants/`)
      .then(res => {
        dispatch(receivePasifikaGrants(res.body.result))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting pasifika grant infomation'))
      })
  }
}
