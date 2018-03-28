import React from 'react'

const Tier3 = (props) => {
  return <div className="tier3" onClick={props.handleChildClick} style={{backgroundColor: props.color, color: props.color}}></div>
}

export default Tier3
