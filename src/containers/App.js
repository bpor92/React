import React, { Component } from 'react';
import './App.css';

import ToDoList from '../components/ToDoList'
import InputAddOn from '../components/InputAddOn'

class App extends Component {
  state = {
    term: '',
    todoList: [
      {text: 'cos do zrobienia', id: '104'},
      {text: 'cos do zrobienia2', id: '1514'},
      {text: 'cos do zrobienia3', id: '1214'},
    ]
  }
  changeTerm = (e) => {
    this.setState({term: e.target.value})
  }

  deleteItem = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.id !== id)
    })
  }

  addToDo = () => {
    this.setState({
      term: '',
      todoList: [...this.state.todoList, {text: this.state.term, id: Date.now()}]
    })
  }

  render() {
    return (
      <div>
        <InputAddOn
          value={this.state.term}
          onChange={this.changeTerm}
          onClick={this.addToDo}
          buttonName="Add"
          />

        <ToDoList 
          items={this.state.todoList} 
          deleteItem={this.deleteItem}
          />
      </div>
    );
  }
}

export default App;
