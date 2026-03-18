function TodoWriteForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" placeholder="할일을 입력하세요" />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoWriteForm;
