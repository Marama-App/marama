// tian and kimmi

// import request from 'superagent'

export const SEND_TYPE = 'SEND_TYPE'

export function getType () {
  return (dispatch) => {
    // request
    //   .get(`/api/v1/interests/:id`)
    //   .end((err, res) => {
    //     if (err) {
    //       // eslint-disable-next-line no-console
    //       console.error(err)
    //     }
    const fakeData = [2, 3, 4, 5]
    dispatch(sendType(fakeData))
    // })
  }
}

export function sendType (res) {
  return {
    type: SEND_TYPE,
    interestType: res
  }
}
