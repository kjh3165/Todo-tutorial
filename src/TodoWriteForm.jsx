function TodoWriteForm({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.todo.value == "") {
      alert("할일을 입력해주세요");
      return;
    }
    addTodo(form.todo.value);
    form.todo.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" placeholder="할일을 입력하세요" />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoWriteForm;
