import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = ({ parts }) => parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
        <Course course={course} />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))