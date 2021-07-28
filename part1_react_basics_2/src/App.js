import React, { useState } from 'react'
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  function mostVotes(votes){
	  let maxi = 0
	  let max = -1
	  let i = 0
	  for(i=0;i<votes.length;i++){
		  if (votes[i]>max){
			  max = votes[i]
			  maxi = i}
	  i++}
  return maxi
  }
const Button = (props) => {
  return (
    <p><button onClick={props.handleClick}>
      {props.text}
    </button></p>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const getRandom = () => {
	  const random = getRandomInt(anecdotes.length-1)
	  setSelected(random)
  }
    const handleVoteClick = () => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }

		  	  
	  
  
  return (
    <div>
	  <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
	  <Button handleClick={getRandom} text='Next'/>
	  <Button handleClick={handleVoteClick} text='Vote'/>
	  <h2>Anecdote with most votes</h2>
	  <p>{anecdotes[mostVotes(votes)]}</p>
    </div>
  )
}

export default App;
