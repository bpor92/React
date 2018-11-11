import React from 'react'

const ToDoList = (props) => {


  return (
    <ul>
      {
        props.items.map((item, index) => <li key={index} onClick={() => props.deleteItem(item.time)}>{item.text}</li>)
      }
    </ul>
  )
}

export default ToDoList