

// 定义类组件:
import React from 'react'
import Count from './components/Count'


// 状态(数据)
export default class App extends React.Component {
  state = {
    count: 10
  }

  handle = (data) =>{
    this.setState({
      count: this.state.count + data
    })
  }
  render() {
    return <div>
      {/* 给Count组件传递数据 */}
      <Count count={this.state.count} xxx={123} handle={this.handle}></Count>
    
    </div>
  }
}
