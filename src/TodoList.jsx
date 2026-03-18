function TodoList({ todos, handleOnClick, handleOnChange }) {
  return (
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
  );
}

export default TodoList;
