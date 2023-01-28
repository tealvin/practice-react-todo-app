const TodoItem = ({ id = "", todo = "", deleteTodo = () => {} } = {}) => {
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <button onClick={handleDeleteTodo}>delete</button>
      <span>{todo}</span>
    </li>
  );
};

const TodoList = ({ todos: dataTodos = [], deleteTodo = () => {} } = {}) => {
  const todoItems =
    dataTodos.length &&
    dataTodos.map((dataTodo = {}) => {
      const { id = "", todo = "" } = dataTodo;

      return <TodoItem key={id} id={id} todo={todo} deleteTodo={deleteTodo} />;
    });

  return <ul>{todoItems}</ul>;
};

export default TodoList;
