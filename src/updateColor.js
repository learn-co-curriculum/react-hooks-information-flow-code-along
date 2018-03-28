import {getRandomColor, getReducedColor} from './randomColorGenerator.js'

export function updateColors(e) {
  e.stopPropagation()
  const newColor = getRandomColor()
  this.setState({
    color: newColor,
    childColor: getReducedColor(newColor)
  })
}

export function updateChildColors(e) {
  e.stopPropagation()
  this.setState({
    childColor: getRandomColor()
  })
}
