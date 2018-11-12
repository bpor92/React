import React, { Component } from 'react';
import './App.css';

import ToDoList from '../components/ToDoList'
import InputAddOn from '../components/InputAddOn'

class App extends Component {
  state = {
    term: '',
    todoList: [
      {text: 'Something to do', id: 3123104},
      {text: 'Buy shoes', id: 151432},
      {text: 'Go to work', id: 3331214},
    ]
  }
  changeTerm = event => {
    this.setState({term: event.target.value})
  }

  deleteItem = id => {
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
