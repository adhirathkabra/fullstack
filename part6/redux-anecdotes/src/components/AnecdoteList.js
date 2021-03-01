import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showVoteNotif, removeVoteNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter === null) {
      return state.anecdotes
    } else {
      return state.anecdotes.filter(anec => anec.content.includes(state.filter))
    }
  })

  const vote = (id, content) => {
    dispatch(voteAnecdote(id))
    dispatch(showVoteNotif(content))
    setTimeout(() => {
      dispatch(removeVoteNotif())
    }, 5000)
  }

  return(
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    )
  )
}
  
  export default AnecdoteList