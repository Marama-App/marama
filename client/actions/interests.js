import request from 'superagent'

export const FETCH_INTERESTS = 'FETCH_INTERESTS'

export const fetchInterests = (interests) => {
  return {
    type: FETCH_INTERESTS,
    interests
  }
}

export function getInterests () {
  return (dispatch) => {
    request('get', '/api/v1/interests')
      .then(res => {
        dispatch(fetchInterests(res.body))
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('error')
      })
  }
}
