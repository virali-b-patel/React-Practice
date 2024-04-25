import React from 'react'

function Array() {

  const persons = [
    {
      id: 1,
      name: "Virali",
      age: 26,
      skill: "Javascript",
    },
    {
      id: 2,
      name: "Vijay",
      age: 27,
      skill: "React",
    },
    {
      id: 3,
      name: "Dishang",
      age: 18,
      skill: "Maths",
    }
  ]

  const personList = persons.map((person) => <h1>{`My name is ${person.name}. I am ${person.age} year old. I know ${person.skill}`}</h1>)

  return (
    <div>
      <div>{personList}</div>
    </div >
  )
}

export default Array

/////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react'

// class Array extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       count: 0
//     }
//   }

//   increaseValue = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 }
//     })
//   }

//   resetValue = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count = 0 }
//     })
//   }

//   decreaseValue = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count - 1 }
//     })
//   }

//   render() {

//     const { count } = this.state

//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={this.increaseValue}>Increased Value</button>
//         <button onClick={this.resetValue}>Reset Value</button>
//         <button onClick={this.decreaseValue}>Decrease Value </button>
//       </div>
//     )
//   }
// }

// export default Array

/////////////////////////////////////////////////////////////////////////////////


// import React, { Component } from 'react'

// export class Array extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       usernameChange: '',
//       comments: '',
//       topic: ''
//     }
//   }

//   handleUsernameChange = (e) => {
//     this.setState({
//       usernameChange: e.target.value
//     })
//   }

//   handleCommentsChange = (e) => {
//     this.setState({
//       comments: e.target.value
//     })
//   }

//   handleTopicChange = (e) => {
//     this.setState({
//       topic: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     alert(`${this.state.usernameChange} ${this.state.comments} ${this.state.topic}`)
//     e.preventDefault()
//   }

//   render() {
//     return (
//       <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type='text'
//             value={this.state.usernameChange}
//             onChange={this.handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label>Components</label>
//           <textarea
//             value={this.state.comments}
//             onChange={this.handleCommentsChange}
//           />
//         </div>
//         <div>
//           <label>Topic</label>
//           <select
//             value={this.state.topic}
//             onChange={this.handleTopicChange}
//           >
//             <option>React</option>
//             <option>Angular</option>
//             <option>Vue</option>
//           </select>
//         </div>
//         <div>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     )
//   }
// }

// export default Array