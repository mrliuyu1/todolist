import React from 'react'
import Detail from '../Detail'
import { Link,Route } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props){
    
    return (
      <div>
        <ul>
          <li>
            <Link to='/home/message/1'>message001</Link>
          </li>
          <li>
            <Link to='/home/message/2'>message002</Link>
          </li>
          <li>
            <Link to='/home/message/3'>message003</Link>
          </li>
        </ul>
        <button onClick={() =>{
          console.log(props.location.pathname);
          props.history.push('/home/message/4',{from : props.location.pathname})
        }}>添加</button>
        <button>替换</button>
        <Route path='/home/message/:id' component={Detail}></Route>
      </div>
    )
 
}
