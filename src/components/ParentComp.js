import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      parentName: "Parent"
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(name) {
    alert(`Hello ${this.state.parentName} From the ${name}`)
  }

  render() {
    return (
      <>
        <ChildComp clickHandler={this.greetParent} />
      </>
    )
  }
}

export default ParentComp
