export const initialState = {
  user: null,
}

export const actionTypes = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
}

const reducer = (state, action) => {
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
    default:
      return state
  }
}

export default reducer
