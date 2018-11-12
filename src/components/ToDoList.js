import React from 'react'
import PropTypes from 'prop-types'

const ToDoList = (props) => {
  return (
    <ul>
      {
        props.items.map((item, index) => 
          <li key={index} onClick={() => props.deleteItem(item.id)}>{item.text}</li>
        )
      }
    </ul>
  )
}

ToDoList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default ToDoList