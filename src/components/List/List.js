import React, { Component } from 'react'
import Item from '../Item/Item'

import './List.css'
export default class List extends Component {

  /* hand = (data) =>{
    let { list,render} = this.props
    
    list.forEach((item) =>{
      console.log(item);
        if(item.id === data){
          item.isDone = !item.isDone
        }
    })
   

    
    render(list)
    
  } */
  deleteOne = (data) =>{
    let { list,render} = this.props
    
    const arr  = list.filter((item) =>{
      return item.id !== data
    })
   
  render(arr)
  }
  render() {
    const { list,render} = this.props
    return (
      <ul className="todo-main">
          {list.map((item) =>{
           return <Item item ={item} handle = {this.hand}  deleteOne={this.deleteOne} list={list}  render={render}></Item>
          })}
      </ul>
    )
  }
}
