import TodoList from "./TodoList";
import TodoWriteForm from "./TodoWriteForm";
import useTodos from "./useTodos";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <>
      <TodoWriteForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
