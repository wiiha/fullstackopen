import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Display = ({text, data}) => <p>{text}: {data}</p>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>Give feedback</h1>
    <Button onClick={()=> setGood(good + 1)} text="Good" />
    <Button onClick={()=> setNeutral(neutral + 1)} text="Neutral" />
    <Button onClick={()=> setBad(bad + 1)} text="Bad" />

    <h2>Statistics</h2>
    <Display text="Good" data={good}/>
    <Display text="Neutral" data={neutral}/>
    <Display text="Bad" data={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)