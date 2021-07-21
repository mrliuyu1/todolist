import React, { Component } from "react";
import "./Item.css";
export default class Item extends Component {
  render() {
    const { item,deleteOne,checkOne } = this.props;
    

    return (
      <li >
        <label>
          <input type="checkbox" checked={item.isDone} onChange={() =>{checkOne(item.id)}} />
          <span>{item.todoName}</span>
        </label>
        <button className="btn btn-danger"  onClick={() =>{deleteOne(item.id)}}>删除</button>
      </li>
    );
  }
}
