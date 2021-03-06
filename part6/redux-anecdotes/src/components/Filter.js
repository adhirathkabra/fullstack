import React from 'react'
import { useDispatch } from 'react-redux'
import { filter, nofilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    if (event.target.value === '') {
      dispatch(nofilter())
    } else {
      dispatch(filter(event.target.value))
    }
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter