import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    const { list , allCheck,hand} = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"   checked={ list.filter((item) => {
                return item.isDone;
              }).length === list.length ? 'checked' : ''} onClick={(e) => {
               allCheck(e.target.checked)
              }}  />
        </label>
        <span>
          <span>
            已完成{" "}
            {
              list.filter((item) => {
                return item.isDone;
              }).length
            }
          </span>{" "}
          / 全部 {list.length}
        </span>
        <button className="btn btn-danger"  onClick = {(e) => {
          const arr = list.filter((item) => {
            return item.isDone === false;
          })
          console.log(arr);
          hand(arr)
        }}>清除已完成任务</button>
      </div>
    );
  }
}
