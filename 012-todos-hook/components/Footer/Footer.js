import React from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  
  const lengthAll = props.todoList.length
  const checkLength = props.todoList.filter((item) => item.isDone).length
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={lengthAll === checkLength ? 'checked' :''} onChange={(e) =>{
              props.checkAll(e.target.checked)
        }} />
      </label>
      <span>
        <span>已完成 {checkLength}</span> / 全部 {lengthAll}
      </span>
      <button className="btn btn-danger" onClick = { props.deleteAll }>清除已完成任务</button>
    </div>
  )
}
