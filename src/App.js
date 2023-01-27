import { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const dataTodos = [
      {
        id: "1",
        todo: "wash dishes",
      },
      {
        id: "2",
        todo: "buy blue berries",
      },
      {
        id: "3",
        todo: "buy flight tickets",
      },
    ];
    this.setState({
      todos: dataTodos,
    });
  }

  render() {
    const { todos = [] } = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
