import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  handleClick = () => {
    // your code here!
  }

  handleChildClick = () => {
    // your code here!
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.setState({color: "#000"})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={null} color={"#0F0"} />
        <Tier2 handleChildClick={null} color={"#0FF"} />
      </div>
    )
  }
}
