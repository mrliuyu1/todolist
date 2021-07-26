import React from "react";
import PubSub from "pubsub-js";
import "./Item.css";
export default function Item(props) {
  function deleteOne() {
    PubSub.publish("deleteOne", props.item.id);
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.item.isDone}
          onChange={() => {
            PubSub.publish("update", props.item.id);
          }}
        />
        <span className={props.item.isDone ? "active" : ""}>
          {props.item.todoname}
        </span>
      </label>
      <button className="btn btn-danger" onClick={deleteOne}>
        删除
      </button>
    </li>
  );
}
