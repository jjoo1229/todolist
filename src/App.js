import "./App.css";
import CurrentDate from "./components/CurrentDate";
import CurrentTime from "./components/CurrentTime";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrentDate />
        <CurrentTime />
        <div className="App-container">
          <InputTodo />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
