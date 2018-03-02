// tian and kimmi

import request from 'superagent'

export const SEND_TYPE = 'SEND_TYPE'

export function sendType (res) {
  return {
    type: SEND_TYPE,
    interestType: res
  }
}

export function getType () {
  return (dispatch) => {
    request('get', `http://localhost:3000/api/v1/interests`)
      .end((err, res) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
        dispatch(sendType(res.body.interests))
      })
  }
}
