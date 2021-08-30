import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Person = ({ id,name,number }) => {
  return (
      <li>{name} {number}</li>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const NameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    if (persons.find(person=> person.name == NameObject.name)) {
      window.alert('${NameObject.name} is already added to phonebook')}
    else{
    setPersons(persons.concat(NameObject))
    setNewName('')
    setNewNumber('')
  }}
  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
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
            <Person id={person.id} name={person.name} number={person.number} />
        )}
        </ul>
      </div>
  )
}

export default App