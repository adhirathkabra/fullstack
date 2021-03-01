const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.text
    case 'NOFILTER':
      return null
    default:
      return state
  }
}

export const filter = (text) => {
  return {
    type: 'FILTER',
    data: { text }
  }
}
  
export const nofilter = () => {
  return {
    type: 'NOFILTER'
  }
}

export default filterReducer