import { createStore } from 'redux'

const initialState = {
  wombats: ['Gertrude', 'Bartholemew']
}

const wombatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [...state.wombats, action.wombat]
      }

    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter(wombat => wombat !== action.wombat)
      }

    default:
      return state
  }
}

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  // Initial render once the DOM content has loaded
  render()
  // Whenever updates are made to the store, run the render function.
  store.subscribe(render)
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats(wombats)
  addListeners(wombats)
}

function addListeners (wombats) {
  for (const wombat of wombats) {
    const button = document.getElementById(wombat)
    button.addEventListener('click', (e) => {
      store.dispatch({
        type: 'DEL_WOMBAT',
        wombat: wombat
      })
    })
  }
}

function renderWombats (wombats) {
  let output = `<ul>`
  for (const wombat of wombats) {
    output += `<li>${wombat}<button id="${wombat}">Delete</button></li>`
  }
  output += `</ul>`
  return output
}

