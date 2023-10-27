import "./styles.css";
import "./App.css";
import TodoApp from "./TodoApp";
const App = () => {
  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="todo-app-container">
        <TodoApp />
      </div>
    </div>
  );
};
export default App;
