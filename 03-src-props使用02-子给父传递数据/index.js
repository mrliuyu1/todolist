import React from 'react'
import ReactDOM from 'react-dom'
// let div = <div>123</div>
// 引入跟组件
import App from './App'

// 使用组件: <App></App> 相当于 new App 返回这个组件的实例对象(react元素)
{
  /* 
  
  使用组件的另外一种写法:<App /> 
  */
}
ReactDOM.render(<App />, document.getElementById('root'))
