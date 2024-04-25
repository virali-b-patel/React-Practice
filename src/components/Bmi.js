import React, { useState } from 'react'

const Bmi = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calBmi = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Please! Enter a Valid Height or Weight')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
      if (bmi < 1200) {
        setMessage('You Are UnderWeight')
      } else if (bmi >= 1200 && bmi < 1500) {
        setMessage('You Are a Healthy Weight')
      } else {
        setMessage('You Are OverWeight')
      }
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <>
      <h1>BMI Calculator</h1>
      <form onSubmit={calBmi}>
        <label>Weight (ibs)</label>
        <input type='text' placeholder='Enter a Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
        <br />
        <label>Height (in)</label>
        <input type='text' placeholder='Enter a Height' value={height} onChange={(e) => setHeight(e.target.value)} />
        <br />
        <button type='submit'>Submit</button>
        <button type='submit' onClick={reload}>Reload</button>
        <h2>Your BMI is : {bmi}</h2>
        <p>{message}</p>
      </form>
    </>
  )
}

export default Bmi