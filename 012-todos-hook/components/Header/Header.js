import React  , {useState} from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {

  const[value,setValue] = useState('')




  function handle (e){

      setValue(e.target.value)
  }

  return (
    <div className="todo-header">
      <input type="text" value = {value} onChange={handle} onKeyDown={(e) =>{
              if(e.keyCode === 13){
                if(!value)return
                PubSub.publish('todoname',value)
                  setValue('')
              }
      }} />
    </div>
  )
}
