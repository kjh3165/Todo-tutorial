import { useRef, useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" placeholder="할일을 입력하세요" />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => handleOnChange(todo.id)}
              checked={todo.checked}
            />
            {JSON.stringify(todo.checked)} | {todo.id} : {todo.text}
            <button onClick={() => handleOnClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
