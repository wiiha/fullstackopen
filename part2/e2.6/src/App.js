import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const contactRows = () => persons.map(person => <p key={person.name}>{person.name}</p>)

  const handleNameChange = (event) => setNewName(event.target.value)

  const addPerson = (event) =>{
      event.preventDefault()
      const personObj = {
          name: newName,
      }
      setPersons(persons.concat(personObj))
      
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contactRows()}
    </div>
  )
}

export default App