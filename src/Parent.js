import React, { useState } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

function Parent() {
  const [color, setColor] = useState(getRandomColor())
  const [childrenColor, setChildrenColor] = useState('#FFF')

  const handleChangeColor = (newChildColor) => {
    setColor(getRandomColor())
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  )
}

export default Parent
