// import React from 'react'

// function Props(props) {

//   const { name, heroName } = props

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1 >{name} is a {heroName}</h1>
//     </div>
//   )
// }

// export default Props

// import React, { Component } from 'react'

// class Props extends Component {
//   render() {
//     const { name, heroName } = this.props
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1 >{name} is a {heroName}</h1>
//       </div>
//     )
//   }
// }

// export default Props

// import React from 'react'

// function Props() {

//   function clickHandler() {
//     console.log("Clicked");
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// export default Props

import React, { Component } from 'react'

class Props extends Component {

  clickHandler() {
    console.log("Clickable");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked</button>
      </div>
    )
  }
}

export default Props

