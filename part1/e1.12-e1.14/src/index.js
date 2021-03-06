import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({heading, content, votes}) =>(
    <>
    <h2>{heading}</h2>
    {content}
    <br/>
    {"has " + votes + " votes"}
    </>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [mostVotes, setMostVotes] = useState(0)
    const numOfAnecdotes = anecdotes.length
    const [votes, setVotes] = useState(Array.apply(null, new Array(numOfAnecdotes)).map(Number.prototype.valueOf, 0))

    const newAnecdote = () => {
        const select = Math.floor(Math.random() * anecdotes.length)
        setSelected(select)
    }

    const vote = () => {
        const newVotes = [ ...votes ]
        newVotes[selected] += 1
        for (let index = 0; index < newVotes.length; index++) {
            if (newVotes[index] > newVotes[mostVotes]) {
                setMostVotes(index)
            }
        }
        setVotes(newVotes)
    }

    return (
        <div>
            <Display heading="Anecdote of the day" content={props.anecdotes[selected]} votes={votes[selected]}/>
            <br />
            <Button onClick={() => vote()} text="Vote" />
            <Button onClick={() => newAnecdote()} text="Next anecdote" />
            <Display heading="Anecdote with most votes" content={props.anecdotes[mostVotes]} votes={votes[mostVotes]}/>

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)