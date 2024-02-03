import Todo from "./Todo";

const Todos = ({ todos, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <>
      {todos.length > 0 && (
        <ul className="px-3">
          {todos.map(({ id }, i, todos) => (
            <Todo
              key={id}
              {...todos[i]}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default Todos;
