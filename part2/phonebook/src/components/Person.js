import React from 'react'

const Person = ({ person, delPerson }) => {
  return (
    <div>
      <p>{person.name} {person.number}</p><button onClick={delPerson}>delete</button>
    </div>
  )
}

export default Person