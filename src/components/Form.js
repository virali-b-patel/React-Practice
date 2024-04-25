import React, { Component } from 'react'

export class Form extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value
    })
  }

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  handleSubmit = ((e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    e.preventDefault()
  })

  render() {
    const { username, comments, topic } = this.state
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
        <div>
          <label>Username</label>
          <input type='text' value={username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentsChange} ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange} >
            <option value="react" >React</option>
            <option value="angular">Angular</option>
            <option value="vue" >Vue</option>
          </select>
        </div>
        <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default Form
