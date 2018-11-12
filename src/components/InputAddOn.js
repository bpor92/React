import React from 'react'
import PropTypes from 'prop-types'

const InputAddOn = props => {
  return (
    <div>
      <input type={props.inputType} value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>{props.buttonName}</button>
    </div>
  )
}

InputAddOn.defaultProps = {
  buttonName: 'Submit',
  inputType: 'text',
}

InputAddOn.propTypes = {
  buttonName: PropTypes.string,
  inputType: PropTypes.string,
}

export default InputAddOn