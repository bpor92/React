import React from 'react'

const InputAddOn = props => {

  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>{props.buttonName}</button>
    </div>
  )
}

export default InputAddOn