import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    const { list, hand } = this.props;
   

    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              console.log(list);
              if (!e.target.value) return;
              list.push({
                id: list.length? list[list.length - 1].id + 1 : 1,
                todoName: e.target.value,
                isDone: false,
              });

              hand(list);
              e.target.value = "";
            }
          }}
        />
      </div>
    );
  }
}
