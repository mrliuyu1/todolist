import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  state = {
    content: "",
  };

  handle = (e) => {

    this.setState({ 
    content :  e.target.value
    })
  };

  keyUp = (e) => {
    if(e.keyCode === 13){
      const { addTodo } = this.props
      if(!e.target.value)return

      addTodo(e.target.value)

      this.setState({
        content : ''
      })

    }
  
  };
    
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.content}
          onChange={this.handle}
          onKeyDown={this.keyUp}
        />
      </div>
    );
  }
}
