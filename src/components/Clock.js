import React, { useState } from 'react'

const Clock = () => {

  const cTime = new Date().getHours()

  let greetings = '';
  let changeColor = {}

  if (cTime >= 1 && cTime < 12) {
    greetings = "Good Morning";
    changeColor.color = "green"
  } else if (cTime > 12 && cTime < 19) {
    greetings = "Good Afternoon"
    changeColor.color = "orange"
  } else {
    greetings = "Good Night"
    changeColor.color = "black"
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Hello, <span style={changeColor}>{greetings}</span> </h1>
      </div>
    </>
  )
}

export default Clock
