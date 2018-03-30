import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={"#0F0"} />
        <Tier2 color={"#0FF"} />
      </div>
    )
  }
}
