import React, { Component } from 'react'
import './App.css'
import { getRandomColor } from './randomColorGenerator.js'
import Tier1 from './Tier1.js'

class App extends Component {
  render() {
    const initialColor = getRandomColor()
    return (
      <div className="App">
        <Tier1 color={ initialColor } />
        <Tier1 color={ initialColor } />
      </div>
    )
  }
}

export default App
