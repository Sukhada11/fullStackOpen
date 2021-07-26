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
	<p>Total : 
	{props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}
	</p>
    </div>
  )
}
const Content = (props)=> {
	const part1 = props.part[0]
	const part2 = props.part[1]
	const part3 = props.part[2]
	
  return (
  
    <div>
	    <p>
		<Part name={part1.name} exercise={part1.exercises}/>
		<Part name={part2.name} exercise={part2.exercises}/>
		<Part name={part3.name} exercise={part3.exercises}/>
		</p>
    </div>
  )
}

const App = () => {
const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part}/>
      <Total part={course.part}/>
    </div>
  )
}
export default App;
