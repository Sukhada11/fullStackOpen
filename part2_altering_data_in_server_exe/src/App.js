import './App.css';
import React, { useState, useEffect } from 'react'
import personService from './services/person'
import Person from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
        personService
        .getAll()
        .then(initialNames => {
          setPersons(initialNames)
        })
  }, [])


  const addPerson = (event) => {
      event.preventDefault()
      const NameObject = {
          name: newName,
          id: persons.length + 1,
          number: newNumber
      }
      if (persons.find(person => person.name == NameObject.name)) {
          window.confirm('${NameObject.name} is already added to phonebook, replace the old number with new one?')

      personService.update(NameObject.id, {
          name: newName,
          number: newNumber,
      })
          .then((returnedPerson) => {
              const newPersons = persons.map((person) =>
                  person.id !== returnedPerson.id ? person : returnedPerson
              );
              setPersons(newPersons);
          })

      }
    else{
        personService
            .create(NameObject)
            .then(returnedName => {
                setPersons(persons.concat(returnedName))
                setNewName('')
                setNewNumber('')
            })
  }}
  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleDelete = (name,id) => {
      console.log(name,id)
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            personService.remove(id);
            setPersons(persons.filter((person) => person.id !== id));
        }}
  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)}
  const displayPerson = newFilter
      ? persons.filter(person => person.name.toLowerCase().search(newFilter.toLowerCase()) !== -1)
      : persons;
  return (
      <div>
        <h2>Phonebook</h2>

        <form onSubmit={addPerson}>
          <p> Name </p>
          <input value={newName}
                 onChange={handleName}/>
          <p> Number </p>
          <input value={newNumber}
                 onChange={handleNumber}/>
          <p>
          <button type="submit">Add</button>
          </p>
        </form>
        <p> Filter shown with </p>
        <input value={newFilter}
               onChange={handleSearch}/>
        <h2>Numbers</h2>
        <ul>
        {displayPerson.map(person =>
            <Person id={person.id} name={person.name} number={person.number} handleDel={()=>handleDelete(person.name,person.id)} />
        )}
        </ul>
      </div>
  )
}


export default App