import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    const {name} = props.course
    return (
        <h1>{name}</h1>
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
    const {parts} = props.course
    console.log(parts);
    
    return (
        <>
            {parts.map( part => <Part key={part.name} part={part} />)}
        </>
    )
}

const Total = (props) => {
    let total = 0
    const {parts} = props.course
    parts.forEach(part => total += part.exercises)
    return (
        <p>Number of exercises {total}</p>
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
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))