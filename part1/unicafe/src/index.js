import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>  
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="all" value={props.good + props.neutral + props.bad} />
          <Statistic text="average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
          <Statistic text="positive" value={props.good/(props.good + props.neutral + props.bad)*100 + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = "give feedback";
  const stats = "statistics";

  const handleGood = () => setGood(good + 1)
  const handleNeut = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header title={feedback} />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeut} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Header title={stats} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)