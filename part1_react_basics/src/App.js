import React, { useState } from 'react'
const Stats = ({ type,values }) => {
		if (type ==='good'){
			return (
			    <div>
				<p> Good : {values}</p>
				</div>)
			
		}else if (type === 'neutral'){
			return (
			    <div>
				<p> Neutral : {values}</p>
				</div>)
			
		}else if (type === 'bad'){
			
			return (
			    <div>
				<p> Bad : {values}</p>
				</div>)
			
		}else if (type === 'Average'){
			
				return (
			    <div>
				<p> Average : {(values.good+values.bad+values.neutral)/3}</p>
				</div>)
			
		}else if (type === 'Positive'){
				return (
			    <div>
				<p> Positive : {(values.good*100)/(values.good+values.bad+values.neutral)}</p>
				</div>)
			
		}else if (type === 'Negative'){
				return (
			    <div>
				<p> Negative : {(values.bad*100)/(values.good+values.bad+values.neutral)}</p>
				</div>)			
			
		}else if (type === 'Neutral'){
				return (
			    <div>
				<p> Neutral : {(values.neutral*100)/(values.good+values.bad+values.neutral)}</p>
				</div>)			
			
		}
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodval = () => setToValue(good+1,'good')
  const badval = () => setToValue(neutral+1,'bad')
  const neutralval = () => setToValue(bad+1,'neutral')
  const setToValue = (newValue,state) => {
	  if (state == 'good'){
		    setGood(newValue)
	    }else if (state == 'neutral'){
			setNeutral(newValue)
	    }else{
		   setBad(newValue)
	  }
  }
  const combo = {
  good ,bad,neutral}
  return (
    <div>
      <Button handleClick={goodval} text='Good'/>
	  <Button handleClick={badval} text='Bad'/>
	  <Button handleClick={neutralval} text='Neutral'/>
	  <Stats type='good' values={good}/>
	  <Stats type='bad' values={bad}/>
	  <Stats type='neutral' values={neutral}/>
	  <Stats type='Average' values={combo}/>
	  <Stats type='Positive' values={combo}/>
	  <Stats type='Neutral' values={combo}/>
	  <Stats type='Negative' values={combo}/>
	  

    </div>
  )
}

export default App;
