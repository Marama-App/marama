export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function clearError (errorMessage) {
  return {
    type: CLEAR_ERROR
  }
}
