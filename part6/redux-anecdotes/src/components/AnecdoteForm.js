import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showAddNotif, removeAddNotif } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    dispatch(addAnecdote(content))
    dispatch(showAddNotif(content))
    setTimeout(() => {
      dispatch(removeAddNotif())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
        <form onSubmit={add}>
          <div><input name="anec" /></div>
          <button type="submit">create</button>
        </form>
    </div>
  )
}

export default AnecdoteForm