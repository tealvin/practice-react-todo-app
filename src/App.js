import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoIdCount, setTodoIdCount] = useState(0);

  useEffect(() => {
    // mock fetching data

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

    setTodos(dataTodos);
    setTodoIdCount(dataTodoIdCount);
  }, []);

  const addTodo = (inputValue = "") => {
    if (!inputValue) return;

    const newTodoIdCount = todoIdCount + 1;
    setTodos([
      ...todos,
      {
        id: `${newTodoIdCount}`,
        todo: inputValue,
      },
    ]);
    setTodoIdCount(newTodoIdCount);
  };

  const deleteTodo = (targetId = "") => {
    if (!targetId) return;

    const filteredTodos = todos.filter(({ id = "" }) => id !== targetId);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
