
import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div style={{
        textAlign: 'center', justifyContent: 'center', width: '100  px', minHeight: '100vh', display: 'flex',
        flexDirection: 'column', margin: 'auto'
      }}>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput