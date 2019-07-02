import React from 'react'

const Person = ({ name, number }) => (
    <p>{name} {number}</p>
)

const Persons = ({ persons, searchFilter }) => {
    const personsToShow = (searchFilter === '')
        ? persons
        : persons.filter(person =>
            person.name
                .toLowerCase()
                .search(searchFilter.toLowerCase()) > -1)

    const contactRows = () => personsToShow.map(person =>
        <Person
            key={person.name}
            name={person.name}
            number={person.number}
        />)

    return (
        <>
            {contactRows()}
        </>
    )
}

export default Persons
