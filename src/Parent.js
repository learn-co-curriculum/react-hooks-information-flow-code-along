import React, { useState } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

function Parent() {
  const [color, setColor] = useState(getRandomColor())

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child />
      <Child />
    </div>
  )
}

export default Parent
