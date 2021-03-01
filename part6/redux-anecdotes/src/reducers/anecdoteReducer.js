import anecService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
        const id = action.data.id
        const anecToVote = state.find(a => a.id === id)
        const changedAnec = {
          ...anecToVote, votes: anecToVote.votes + 1
        }
        const newAnecdotes = state.map(anec => 
          anec.id !==id ? anec : changedAnec
        )
        const sortedAnecdotes = newAnecdotes.sort((a,b) => 
          b.votes - a.votes
        )
        return sortedAnecdotes
      }
    case 'ADD_ANEC':
      return state.concat(action.data)
    case 'INIT':
      return action.data
    default: return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecService.createAnec(content)
    dispatch({
      type: 'ADD_ANEC',
      data: anecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }  
}

export default anecdoteReducer