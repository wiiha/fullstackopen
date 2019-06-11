import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props);
    
    const {name, exercises} = props.part
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Content = (props) => {
    const {parts} = props
    console.log(parts);
    
    return (
        <>
            {parts.map( part => <Part key={part.name} part={part} />)}
        </>
    )
}

const Total = (props) => {
    let total = 0
    props.parts.forEach(part => total += part.exercises)
    return (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'

    const parts = [
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
    

    return (
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))