import React from 'react'
// catUrl拿到的是打包之后的图片的路径
import CatUrl from '../assets/cat.gif'
import usePosition from '../Useposition'
export default function Cat  () {
 
    let { x, y } = usePosition()
    x += 200
    y -= 50
    return (
      <div>
        <img
          //  这里应该写打包之后的图片的路径
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
 
}
