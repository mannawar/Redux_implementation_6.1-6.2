const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return state
    case 'NEUTRAL':
      return state
    case 'BAD':
      return state
    case 'RESET':
      return state
    default: return state
  }
  
}

export default counterReducer