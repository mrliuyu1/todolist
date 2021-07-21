import React, { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import { todoLS } from "./utils/tools";

// import { todoLS } from './utils/tools'
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    const result = localStorage.getItem("todoList");
    this.state = {
      todoList: result ? JSON.parse(result) : [],
    };
  }

  // 添加内容
  addTodo = (data) => {
    const { todoList } = this.state;
    let str = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      isDone: false,
      todoName: data,
    };
    let arr = [...todoList, str];
    this.setState({
      todoList: arr,
    });
  };
  // 删除内容
  deleteOne = (id) => {
    const { todoList } = this.state;
    const arr = todoList.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todoList: arr });
  };

  // 选中内容

  checkOne = (id) => {
    const { todoList } = this.state;
    let arr = [...todoList];
    arr.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });
    this.setState({ todoList: arr });
  };

  // 全选
  checkAll = () => {
    const { todoList } = this.state;
    const result = todoList.every((item) => item.isDone);

    const arr = todoList.map((item) => {
      item.isDone = !result;
      return item;
    });
    this.setState({ todoList: arr });
  };

  // 删除选中

  deleteAll = () => {
    const { todoList } = this.state;
    const arr = todoList.filter((item) => !item.isDone);

    this.setState({ todoList: arr });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <div>
            <List
              list={todoList}
              deleteOne={this.deleteOne}
              checkOne={this.checkOne}
            ></List>
            {todoList.length ? (
              <Footer
                list={todoList}
                checkAll={this.checkAll}
                deleteAll={this.deleteAll}
              ></Footer>
            ) : (
              <h1>暂无任务</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    todoLS(this.state.todoList);
  }
}
