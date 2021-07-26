import React, { useState, useEffect } from "react";
import PubSub from 'pubsub-js'
import tools from './tools'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Item from './components/Item/Item'
// import Item from './components/Item/Item'
import "./App.css";
export default function App() {
  let result = localStorage.getItem('todoList')
  result  = result? JSON.parse(result) : []
  console.log(result);
  const [todoList, setList] = useState(result);

  useEffect(() => {
    PubSub.subscribe('todoname', (msg,data) =>{
         let obj = {
           id : todoList.length? todoList[todoList.length-1].id +1 : 1,
            isDone: false,
            todoname : data
         }
         const newtodoList =  [...todoList, obj]
         
         setList(newtodoList)
         
    })
    PubSub.subscribe('update',(msg,id) =>{
        const newtodoList = [...todoList]

        newtodoList.forEach((item) =>{
          if(item.id === id){
            item.isDone = !item.isDone
          }
        })
        setList(newtodoList)
    })

    PubSub.subscribe('deleteOne',(msg,id) =>{
     
      const newtodoList = todoList.filter((item) => item.id !== id)
      setList(newtodoList) 
    })
    tools(todoList)
    return () => {
      PubSub.clearAllSubscriptions()
    }
  })

// 删除选中

function deleteAll () {
    const newtodoList = todoList.filter((item) => !item.isDone)
    setList(newtodoList)
}

//  点击全选
  function checkAll(isdone){

    const newtodoList = [...todoList]
    newtodoList.forEach((item) => { 
          item.isDone = isdone

    })
    setList(newtodoList)
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>{todoList.map((item) => {
              return <Item item = {item} key={item.id}></Item>
            })}</List>
          <Footer todoList = {todoList} checkAll ={checkAll} deleteAll = {deleteAll}></Footer>
        </div>
      </div>
    </div>
  );
}
