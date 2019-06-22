import React from 'react'

const Header = ({ name}) => <h2>{name}</h2>

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = ({ parts }) => parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)

const Total = ({ parts }) => (
    <p>
        <b>
            Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises.
        </b>
    </p>
)

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course;