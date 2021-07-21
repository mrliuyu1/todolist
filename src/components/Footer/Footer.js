import React, { Component } from "react";

import "./Footer.css";
export default class Footer extends Component {
  render() {
    const { list,checkAll,deleteAll } = this.props;
    
    
    const num  = list.filter((item) => item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={num === list.length} onChange ={ ()=>{checkAll()}} />
        </label>
        <span>
          <span>已完成{num} </span> / 全部 { list.length}
        </span>
        <button className="btn btn-danger" onClick={() =>{deleteAll()}}>清除已完成任务</button>
      </div>
    );
  }
}
