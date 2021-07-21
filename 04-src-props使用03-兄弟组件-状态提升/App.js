

// 定义类组件:
import React from 'react'
import Count from './components/Count'
import Test from './components/Test'


// 状态(数据)
export default class App extends React.Component {
  state = {count: 0}
  
  render() {
    return <div>
      {/* 给Count组件传递数据 */}
      <Count count={this.state.count}></Count>
      <Test count={this.state.count}></Test>
      <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+</button>
    
    </div>
  }
}
