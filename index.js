import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function wombats () {
  document.getElementById('app').innerHTML = store.getState().wombats.reduce(
    (list, wombat) => `<li>${wombat}</li>`,
    ''
  )
}

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(wombats)
  wombats()
})
