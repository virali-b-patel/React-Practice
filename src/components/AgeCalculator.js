import React, { useState } from 'react'

const AgeCalculator = () => {

  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(0)

  const calculateAge = () => {
    const today = new Date()
    const birthdayDate = new Date(birthDate)

    let age = today.getFullYear() - birthdayDate.getFullYear()
    let monthDiff = today.getMonth() - birthdayDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    setAge(age)
  }

  const reset = () => {
    setBirthDate('')
    setAge(0)
  }


  return (
    <>
      <div>
        <h1>Age Calculator</h1>
        <p>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>
        <div>
          <h2>Date of Birth</h2>
          <input type='date' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          <div>
            <div>
              <button onClick={calculateAge}>Calculate Age</button>
              <button onClick={reset}>Reset</button>
            </div>
            <div>
              <h2>Your Age is</h2>
              <h2>{age}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgeCalculator
