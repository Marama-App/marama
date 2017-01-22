export const addWombat = wombat => {
  return {
    type: 'ADD_WOMBAT',
    wombat
  }
}

export const delWombat = wombat => {
  return {
    type: 'DEL_WOMBAT',
    wombat
  }
}
