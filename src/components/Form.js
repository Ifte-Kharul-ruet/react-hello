import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments: 'Write Comments',
         topic:'vue'
      }
    }
    handleNameChange =(event)=>{
       this.setState({
        username : event.target.value
       }) 
    }
    commentsHandler =(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopic =(event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handlesubmit =(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()

    }
  render() {
    const {username , comments, topic} = this.state
    return (
<form onSubmit={this.handlesubmit}>
        <div>
        <label>UserName</label>
        <input type='text' value = {username} onChange={this.handleNameChange}></input>
      </div>
      <div>
        <label>Comments</label>
        <textarea value = {comments} onChange={this.commentsHandler}></textarea>
      </div>
      <div>
        <select value={topic} onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
      </div>
      <div>
        <button type = "submit">Submit</button>
      </div>
</form>
    )
  }
}

export default Form
