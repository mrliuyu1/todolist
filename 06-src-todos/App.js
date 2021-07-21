import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import { todoLS } from './utils/tools'
import './App.css'
export default class App extends Component {

  constructor ( ) {
    super()
     const result = localStorage.getItem('todoList')
     
     this.state = {

        todoList : result? JSON.parse(result) : []
     }
  }
 /*  state = {
    todoList: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
    ],
  } */

 handle = (data) => {
  const { todoList } = this.state
   this.setState({todoList: data? data : todoList})
    todoLS(data? data : todoList)
 }

 allCheck = (data) => {


  const { todoList } = this.state
 
  todoList.forEach((item) => {
    item.isDone = data
  })
  this.setState({todoList })
 }

 
  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header list={todoList} hand ={this.handle}></Header>
          <div>
            <List list={todoList} render={this.handle} ></List>
            <Footer list={todoList} allCheck = {this.allCheck} hand ={this.handle}></Footer>
          </div>
        </div>
      </div>
    )
  }
}
