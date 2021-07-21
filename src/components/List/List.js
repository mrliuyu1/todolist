import React, { Component } from 'react'
import Item from '../Item/Item'

import './List.css'
export default class List extends Component {

   
 
  render() {
    const{ list,deleteOne,checkOne, } = this.props
    return (
      <ul className="todo-main">
       {list.map(item => {
          return <Item item ={item} deleteOne={deleteOne}  checkOne ={checkOne}></Item>
       })}
      </ul>
    )
  }
}
