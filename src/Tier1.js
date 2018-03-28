import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import { updateColors, updateChildColors } from './updateColor.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  render() {
    return (
      <div onClick={updateColors.bind(this)} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
      </div>
    )
  }
}
