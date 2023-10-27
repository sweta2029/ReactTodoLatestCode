import { Plus, Trash, CheckCircle } from "react-feather";
import { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterData, setFilterData] = useState("all");

  const addTodo = () => {
    let todoitem = {
      id: Math.random().toString(36).substring(7),
      name: inputText,
      check: false,
      completed: false
    };
    if (inputText !== "") {
      setTodos([...todos, todoitem]);
      setInputText("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, ind) => {
      return ind !== index;
    });
    setTodos(newTodos);
  };

  const handleRadioBtn = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  };

  const filterTodolist = (filterData) => {
    setFilterData(filterData);
  };

  const markTodo = todos.filter((todo, index) => {
    if (filterData === "all") {
      return true;
    } else if (filterData === "active") {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });

  return (
    <div>
      <div className="App">
        <div className="brand">
          <CheckCircle color="#fff" size={24}></CheckCircle>
          <h1>TODO APP</h1>
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            name="todo"
            value={inputText}
            placeholder="Create a new todo ..."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></input>
          <button className="add-button" onClick={addTodo}>
            <Plus></Plus>
          </button>
        </div>

        <div>
          {markTodo?.length > 0 ? (
            <ul className="todo-list">
              {markTodo.map((item, index) => {
                return (
                  <li key={item.id}>
                    <input
                      type="radio"
                      name="todocheck"
                      checked={item.completed}
                      onChange={() => handleRadioBtn(item.id)}
                    ></input>
                    <p className={item.completed ? "check" : ""}>{item.name}</p>
                    <button
                      onClick={() => {
                        deleteTodo(index);
                      }}
                    >
                      <Trash size={14}></Trash>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="empty">
              <p>No todo's found !!!!</p>
            </div>
          )}
          <br />
          <div>
            <button className="my-button" onClick={() => filterTodolist("all")}>
              All
            </button>
            <button
              className="my-button"
              onClick={() => filterTodolist("active")}
            >
              Active
            </button>
            <button
              className="my-button"
              onClick={() => filterTodolist("completed")}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
