

// 定义类组件:
import React from 'react'
import Count from './components/Count'


// 状态(数据)
export default class App extends React.Component {
  state = {
    count: 10
  }
  render() {
    return <div>
      {/* 给Count组件传递数据 */}
      <Count count={this.state.count} xxx={123}></Count>
      <button onClick={()=>{
        // this.setState只能修改自己身上的state的数据
        this.setState({
          count: this.state.count +1
        })
      }}>+</button>
    </div>
  }
}
