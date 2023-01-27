const TodoList = ({ todos: dataTodos = [] } = {}) => {
  const todoItems =
    dataTodos.length &&
    dataTodos.map((dataTodo = {}) => {
      const { id = "", todo = "" } = dataTodo;

      return <li key={id}>{todo}</li>;
    });

  return <ul>{todoItems}</ul>;
};

export default TodoList;
