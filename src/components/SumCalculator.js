import React, { useState } from 'react'

const SumCalculator = () => {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [value, setValue] = useState('')

  const addValue = (e) => {
    e.preventDefault()

    let value = parseInt(num1) + parseInt(num2)
    setValue(parseInt(value))

  }

  return (
    <>
      <div>
        <h1>Sum Calculator</h1>
        <form onSubmit={addValue}>
          <div>
            <label>Number 1</label>
            <input type='text' placeholder='Enter Number1 Value' value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Number 2</label>
            <input type='text' placeholder='Enter Number2 Value' value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
          </div>
          <button type='submit'>Submit</button>
          <p>Your Sum is : {value}</p>
        </form>
      </div>
    </>
  )
}

export default SumCalculator
