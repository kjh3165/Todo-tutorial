import { useRef, useState } from "react";
import TodoList from "./TodoList";
import TodoWriteForm from "./TodoWriteForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "할일1", checked: true },
    { id: 2, text: "할일2", checked: false },
    { id: 3, text: "할일3", checked: true },
  ]);

  const lastId = useRef(4);

  const addTodo = (text) => {
    setTodos([...todos, { id: lastId.current++, text: text, checked: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id != id ? todo : { ...todo, checked: !todo.checked },
      ),
    );
  };

  return (
    <>
      <TodoWriteForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
