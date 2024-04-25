// import React, { useState } from 'react'

// const IncrDecr = () => {

//   const [value, setValue] = useState(0)

//   return (
//     <>
//       <div>{value}</div>
//       <button onClick={() => setValue(value + 1)}>Increment</button>
//       <button onClick={() => setValue(value - 1)}>Decrement</button>
//     </>
//   )
// }

// export default IncrDecr

// import React, { useState } from 'react'

// const IncrDecr = () => {

//   const [value, setValue] = useState(0)

//   const IncreaseValue = () => {
//     setValue(value + 1)
//   }

//   const DecreaseValue = () => {
//     setValue(value - 1)
//   }

//   return (
//     <>
//       <div>{value}</div>
//       <button onClick={IncreaseValue}>Increment</button>
//       <button onClick={DecreaseValue}>Decrement</button>
//     </>
//   )
// }

// export default IncrDecr


// import React, { useEffect, useState } from 'react'

// const IncrDecr = () => {

//   const [value, setValue] = useState(0)

//   useEffect(() => {
//     document.title = `Number ${value}`
//   }, [])

//   const increaseValue = () => {
//     // if (value < 10) {
//     //   setValue(value + 1)
//     // } else {
//     //   setValue(10)
//     // }
//     setValue(value + 1)
//   }

//   const decreaseValue = () => {
//     // if (value > 0) {
//     //   setValue(value - 1)
//     // } else {
//     //   setValue(0)
//     // }
//     setValue(value - 1)
//   }

//   return (
//     <>
//       <div>{value}</div>
//       <button onClick={increaseValue}>Increment</button>
//       <button onClick={decreaseValue}>Decrement</button>
//     </>
//   )
// }

// export default IncrDecr

import React, { useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === "Increment") {
    state = state + 1
  } else
    if (state > 0 && action.type === "Decrement") {
      state = state - 1
    }
  return state
}

const IncrDecr = () => {

  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <div>
        <div>{state}</div>
        <button onClick={() => dispatch({ type: "Increment" })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>DECREMENT</button>
      </div>
    </>
  )
}

export default IncrDecr
