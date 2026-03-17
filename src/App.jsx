import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["할일1", "할일2", "할일3"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([...todos, form.todo.value]);
    form.todo.value = "";
  };

  const handleOnClick = (index) => {
    setTodos(todos.filter((todo, i) => i != index));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" placeholder="할일을 입력하세요" />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleOnClick(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
