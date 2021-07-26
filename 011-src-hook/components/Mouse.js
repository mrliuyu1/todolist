import React  from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../Useposition'
export default function  Mouse () {
 
  
    let { x, y } = usePosition()
    return (
      <div>
        <img
          src={MouseUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  
}
