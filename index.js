import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(render)
  render()
})

function render () {
  const wombats = renderWombats(store.getState().wombats)
  document.getElementById('app').innerHTML = wombats
}

function renderWombats (wombats) {
  return wombats.reduce(
    (list, wombat) => `${list}<li>${wombat}</li>`,
    ''
  )
}

