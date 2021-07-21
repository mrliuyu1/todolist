
// 定义类组件:
import React from 'react'
import Count from './components/Count'
// 状态(数据)
export default class App extends React.Component {
  state = {
    list: [1,2,3]
  }
  render() {
    const {list} = this.state
    return <div>
     <Count list={list}></Count>
    </div>
  }
}
