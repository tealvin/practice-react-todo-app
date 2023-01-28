import { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: [],
    todoIdCount: 0,
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
    const dataTodoIdCount = 3;

    this.setState({
      todos: dataTodos,
      todoIdCount: dataTodoIdCount,
    });
  }

  addTodo = (inputValue = "") => {
    if (!inputValue) return;

    const { todos = [], todoIdCount = 0 } = this.state;
    const newTodoIdCount = todoIdCount + 1;

    this.setState({
      todos: [
        ...todos,
        {
          id: `${newTodoIdCount}`,
          todo: inputValue,
        },
      ],
      todoIdCount: newTodoIdCount,
    });
  };

  render() {
    const { todos = [] } = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
