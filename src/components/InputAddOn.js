import React from 'react'

const InputAddOn = props => {
  const buttonName = props.buttonName ? props.buttonName : 'Submit'
  const inputType = props.inputType ? props.inputType : 'text'

  return (
    <div>
      <input type={inputType} value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>{buttonName}</button>
    </div>
  )
}

export default InputAddOn