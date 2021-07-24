import React from 'react'
const Header = (props) => {
  return (
    <div>
	<h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
	<p>
	{props.name} {props.exercise}
	</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
	<p>{props.exe[0]+props.exe[1]+props.exe[2]}</p>
    </div>
  )
}
const Content = (props)=> {
  return (
    <div>
	    <p>
		<Part name={props.part[0]} exercise={props.exercises[0]}/>
		<Part name={props.part[1]} exercise={props.exercises[1]}/>
		<Part name={props.part[2]} exercise={props.exercises[2]}/>
		</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]


  
  return (
    <div>
      <Header course={course} />
      <Content part={part} exercises={exercises}/>
      <Total exe={exercises}/>
    </div>
  )
}
export default App;
