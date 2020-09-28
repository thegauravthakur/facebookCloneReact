export const initialState = {
  user: null,
  error: null,
}

export const actionTypes = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
  ADD_ERROR: 'ADD_USER',
  REMOVE_ERROR: 'REMOVE_ERROR',
}

const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: action.payload,
      }

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: null,
      }

    case actionTypes.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    case actionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export default reducer
