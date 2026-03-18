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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.todo.value == "") {
      alert("할일을 입력해주세요");
      return;
    }
    setTodos([
      ...todos,
      { id: lastId.current++, text: form.todo.value, checked: false },
    ]);
    form.todo.value = "";
  };

  const handleOnClick = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleOnChange = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id != id ? todo : { ...todo, checked: !todo.checked },
      ),
    );
  };

  return (
    <>
      <TodoWriteForm handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        handleOnClick={handleOnClick}
        handleOnChange={handleOnChange}
      />
    </>
  );
}

export default App;
