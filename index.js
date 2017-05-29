import { createStore } from 'redux'

import reducers from './reducers'

import { addWombat, deleteWombat } from './actions'

const store = createStore(reducers)

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

