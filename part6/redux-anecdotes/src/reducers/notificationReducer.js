const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'VOTE-SHOW':
      return `you voted '${action.data.content}'`
    case 'VOTE-REMOVE':
      return null
    case 'ADD-SHOW':
      return `you added '${action.data.content}'`
    case 'ADD-REMOVE':
      return null
    default:
      return state
  }
}

export const showVoteNotif = (content) => {
  return {
    type: 'VOTE-SHOW',
    data: { content }
  }
}

export const removeVoteNotif = () => {
  return {
    type: 'VOTE-REMOVE'
  }
}

export const showAddNotif = (content) => {
  return {
    type: 'ADD-SHOW',
    data: { content }
  }
}
  
export const removeAddNotif = () => {
  return {
    type: 'ADD-REMOVE'
  }
}

export default notificationReducer