import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
