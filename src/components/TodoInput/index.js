import { Component } from "react";
class TodoInput extends Component {
  state = { inputValue: "" };

  handleInputChange = (e = {}) => {
    const { target: { value: userInput = "" } = {} } = e;
    this.setState({ inputValue: userInput });
  };

  handleAddTodo = () => {
    const { inputValue = "" } = this.state;
    const { addTodo = () => {} } = this.props;
    addTodo(inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue = "" } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
