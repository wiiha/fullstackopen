import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({ text, data }) => <p>{text}: {data}</p>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const score = 1 * good + 0 * neutral + (-1) * bad
  const average = (score / all)
  const positive = (good / all)

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <Display text="Good" data={good} />
      <Display text="Neutral" data={neutral} />
      <Display text="Bad" data={bad} />
      <Display text="All" data={all} />
      <Display text="Average" data={average} />
      <Display text="Good" data={100 * positive + " %"} />
    </div>
  )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)