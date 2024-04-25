// import React, { useEffect, useState } from 'react'

// const Count = () => {

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("effect");
//     setInterval(() => {
//       setCount(prev => prev + 1)
//     }, 1000)
//   }, [])

//   return <div style={{ fontSize: "large" }}>{count}</div>

// }

// export default Count



// // import React, { useEffect, useState } from 'react'

// // const Count = () => {

// //   const [count, setCount] = useState(0)

// //   useEffect(() => {
// //     document.title = `You Clicked ${count}`
// //   })

// //   return (
// //     <div>
// //       <div>{count}</div>
// //       <button onClick={() => setCount(count + 1)} >Increment</button>
// //       <button onClick={() => setCount(count > 0 ? count - 1 : 0)} >Decrement</button>
// //       <button onClick={() => setCount(0)} >Reset</button>
// //     </div>
// //   )
// // }

// // export default Count

// import React, { useState } from 'react'

// const Count = () => {

//   const [value] = useState(0)

//   return (
//     <>
//       <div>{value}</div>
//     </>
//   )
// }

// export default Count




// import React, { useCallback, useState } from 'react'

// const Count = () => {

//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*_-+=[]{}~`"

//     for (let i = 1; i <= i.length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass = str.charAt(char)
//     }
//     setPassword(pass)
//   }, [length, numberAllowed, charAllowed, setPassword])

//   return (
//     <>
//       <div>
//         <h1 className='text-4xl text-center'>Password</h1>
//       </div>
//     </>
//   )
// }

// export default Count


// this.setState((prevState) => ({
//   count: prevState.count + 1
// }))

import React, { Component } from 'react'

export class Count extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState((prevState) => ({
          count: prevState.count + 1
        }))}>increase</button>
        <button onClick={() => this.setState((prevState) => ({
          count: prevState.count > 0 ? prevState.count - 1 : 0
        }))}>decrease</button>
      </div>
    )
  }
}

export default Count
