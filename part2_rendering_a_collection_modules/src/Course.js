import React from 'react'
const Header = ({name}) => {

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
const Content = ({name ,exercise}) => {
    console.log()
    return (
        <li>{name} {exercise}</li>
    )
}
const Total = ({values}) => {

    const parts = values.map(part => part.exercises)
    return (
        <div>
            <p>Total { parts.reduce((s, p) => s + p)} </p>
        </div>
    )
}
const Course = (course) => {

    return (
        <div>
            <Header name={course.course.name} />
            <ul>
                {course.course.parts.map(part=>
                <Content key={part.id} name={part.name} exercise={part.exercises}/>)}
            </ul>

            <Total values={course.course.parts}/>
        </div>

    )
}

export default Course;