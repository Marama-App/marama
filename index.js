import { createStore, combineReducers } from 'redux'

const ADD_WOMBAT = 'ADD_WOMBAT'

const initialWombatState = ['Gertrude', 'Bartholemew']

const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case ADD_WOMBAT:
      return [...state, action.wombat]
    case 'DEL_WOMBAT':
      return state.filter((wombat) => wombat !== action.wombat)
    default:
      return state
  }
}

const initialRhinoState = ['Alexander', 'Tyrone']

const rhinoReducer = (state = initialRhinoState, action) => {
  switch (action.type) {
    case 'ADD_RHINO':
      return [...state, action.rhino]
    case 'DELETE_RHINO':
      return state.filter(rhino => rhino !== action.rhino)
    default:
      return state
  }
}

const reducers = combineReducers({
  wombats: wombatReducer,
  rhinos: rhinoReducer
})

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats('wombats', wombats)
  addListeners('wombats', wombats)
}

function renderWombats (name, wombats) {
  let output = `<ul>`
  for (const wombat of wombats) {
    output += `
    <li>
      ${wombat}
      <button id="${wombat}">Delete</button>
    </li>`
  }
  output += addInput(name)
  output += `</ul>`
  return output
}

function addInput (name) {
  return `
  <input type="text" id="${name}-input"/>
  <button id="${name}-input-button">Add</button>
  `
}

function addListeners (name, wombats) {
  for (const wombat of wombats) {
    const button = document.getElementById(wombat)
    button.addEventListener('click', (e) => {
      store.dispatch(deleteWombat(wombat))
    })
  }
  const inputButton = document.getElementById(`${name}-input-button`)
  inputButton.addEventListener('click', (e) => {
    const inputText = document.getElementById(`${name}-input`)
    const text = inputText.value
    store.dispatch(addWombat(text))
  })
}


function addWombat (wombat) {
  return {
    type: ADD_WOMBAT,
    wombat: wombat
  }
}

function deleteWombat (wombat) {
  return {
    type: 'DEL_WOMBAT',
    wombat: wombat
  }
}

