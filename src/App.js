import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions/index';
class App extends Component {

  state = {
    todo: ''
  }


  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  onSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.todo)
  }



  render() {
    const { todoList } = this.props;
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <form onSubmit={this.onSubmit}>
          <input name="todo" id="todo" onChange={this.onChange}></input>
          <button>ADD</button>
        </form>
        <ul>
          {todoList.map((todo, index) => <li key={index}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



