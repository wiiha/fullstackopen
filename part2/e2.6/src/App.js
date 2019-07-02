import React, { useState } from 'react'

const Person = ({ name, number }) => (
  <p>{name} {number}</p>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const personsToShow = (searchFilter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().search(searchFilter.toLowerCase()) > -1)

  const contactRows = () => personsToShow.map(person =>
    <Person
      key={person.name}
      name={person.name}
      number={person.number}
    />)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.some((person) => person.name === newName)
    if (duplicate) {
      alert(`${newName} is already added to the phonebook.`)

    } else {
      const personObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObj))
    }
    setNewName('')
    setNewNumber('')

  }

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Search by name: <input value={searchFilter} onChange={handleSearchChange} />
      <div>Debug: {searchFilter}</div>

      <h3>Add new person</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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