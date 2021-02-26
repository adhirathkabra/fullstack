import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Person from './components/Person'
import Notification from './components/Notif'
import Error from './components/Error'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNo, setNewNo ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [notif, setNotif] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNo = (event) => {
    setNewNo(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    const filtered = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setPersons(filtered)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if ((persons.some(person => person.name === newName))) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const person = persons.find(p => p.name === newName)
        const changedNo = { ...person, number: newNo }
        personService
          .update(person.id, changedNo)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
            setNotif(`Updated ${person.name}`)
            setTimeout(() => {
              setNotif(null)
            }, 3000)
          })
          .catch(error => {
            setError(`Information of ${person.name} has already been removed from server`)
            setPersons(persons.filter(p => p.id !== person.id))
            setTimeout(() => {
              setError(null)
            }, 3000)
          })
        setNewName('')
        setNewNo('')
      }
    } else {
      const personObject = {
        name: newName,
        number: newNo
      }
      personService
        .create(personObject)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setNotif(`Added ${personObject.name}`)
          setTimeout(() => {
            setNotif(null)
          }, 3000)
        })
      setNewName('')
      setNewNo('')  
    }
  }

  const delPerson = (id) => {
    const name = persons.filter(p => p.id === id)[0].name
    if(window.confirm(`Delete ${name}?`)) {
      personService
        .delPer(id)
      setPersons(persons.filter(p => p.id !== id))
      setNotif(`Deleted ${name}`)
      setTimeout(() => {
        setNotif(null)
      }, 3000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notif} />
      <Error message={error} />
      <Filter filter={filter} onChange={handleFilter} />
      <h3>Add a new</h3>
      <Form addPerson={addPerson} newName={newName} handleInputName={handleInputName} newNo={newNo} handleInputNo={handleInputNo} />
      <h3>Numbers</h3>
      {persons.map(person => 
        <Person key={person.id} person={person} delPerson={() => delPerson(person.id)} />
      )}
    </div>
  )
}

export default App