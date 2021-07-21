// 定义函数组件
// 函数组件定义的注意点:
// 1. 组件名必须是首字母大写. 因为react就通过组件名是否大写,判断是否是组件
// 2. 必须return, return 后面要写一个jsx
// export default function App() {
//   return <div>123</div>
// }

// 定义类组件:
import React from 'react'
import Count from './components/Count'
// 类组件定义的注意点:
// 1. 组件名必须是首字母大写. 因为react就通过组件名是否大写,判断是否是组件
// 2. 必须继承React.Component组件
// 3. 必须写render函数
// 4. 在render中必须return, return后面写jsx

// 状态(数据)
export default class App extends React.Component {
  render() {
    return <div>
      {/* 组件在哪里使用,组件的结构,就渲染到哪里 */}
      <Count></Count>
      {/* <Count></Count> */}

    </div>
  }
}
