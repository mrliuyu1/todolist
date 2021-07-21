import React, { Component } from "react";
import "./Item.css";
export default class Item extends Component {




  render() {
    const { item,deleteOne,} = this.props;
  
    
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={item.isDone ? "checked" : ""}
            onChange={(e) => {
              const {render} = this.props;
               item.isDone = !item.isDone
               console.log(item);
               render()
               console.log(render);
            }}
          />
          <span className={item.isDone ? "active" : ""}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={() =>{
            deleteOne(item.id)
        }}>删除</button>
      </li>
    );
  }
}
