import React, { Component } from 'react'
import './App.css'
import Tier1 from './Tier1.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier1 />
        <Tier1 />
      </div>
    )
  }
}

export default App
