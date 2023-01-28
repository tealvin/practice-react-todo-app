import { useState } from "react";
const TodoInput = ({ addTodo = () => {} } = {}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e = {}) => {
    const { target: { value: userInput = "" } = {} } = e;
    setInputValue(userInput);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const isInputEmpty = inputValue.length === 0;

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo} disabled={isInputEmpty}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
