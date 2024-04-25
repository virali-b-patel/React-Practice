// import React, { Component } from 'react'

// export class Class extends Component {

//   constructor(props) {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   increment() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }))
//   }

//   incrementBy5() {
//     this.increment()
//     this.increment()
//     this.increment()
//     this.increment()
//     this.increment()
//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <div>{this.state.count}</div>
//         <button onClick={() => this.incrementBy5()}>IncementBy5</button>
//       </div>
//     )
//   }

// }

// export default Class

///////////////////////////////////////////////////

// import React, { Component } from 'react'

// export class Class extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       count: 0
//     }
//   }

//   increment() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <div>{this.state.count}</div>
//         <button onClick={() => this.increment()}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Class




// import React, { Component } from 'react'

// class Class extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       message: "Hello world"
//     }
//   }

//   changeMessase() {
//     this.setState({
//       message: "Save the Trees"
//     })
//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1> {this.state.message} </h1>
//         <button onClick={() => this.changeMessase()}>Change the value</button>
//       </div>
//     )
//   }
// }

// export default Class


import React, { Component } from 'react'

export class Class extends Component {

  constructor(props) {
    super()
    this.state = {
      message: "Hello Guys"
    }
  }

  changeMsg = () => {
    this.setState({
      message: "Please!, Save the Trees!"
    })
    console.log(this);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>{this.state.message}</div>
        <button onClick={this.changeMsg}>Change Message</button>
      </div>
    )
  }
}

export default Class
