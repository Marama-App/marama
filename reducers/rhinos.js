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

export default rhinoReducer
