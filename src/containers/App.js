import React, { Component } from 'react';
import './App.css';

import ToDoList from '../components/ToDoList'

class App extends Component {
  state = {
    term: '',
    todoList: [
      {text: 'cos do zrobienia', time: '10:14'},
      {text: 'cos do zrobienia2', time: '15:14'},
      {text: 'cos do zrobienia3', time: '12:14'},
    ]
  }
  changeTerm = (e) => {
    this.setState({term: e.target.value})
  }

  deleteItem = (deletedItem) => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.time !== deletedItem)
    })
  }

  addToDo = () => {
    this.setState({
      term: '',
      todoList: [...this.state.todoList, {text: this.state.term, time: Date.now()}]
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.term} onChange={this.changeTerm} />
        <button onClick={this.addToDo}>Add +</button>
        <ToDoList items={this.state.todoList} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
