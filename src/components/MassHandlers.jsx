const MassHandlers = ({ todos, handleDeleteAll, handleToggleAll }) => {
  return (
    <div className="flex px-3 text-green-dark">
      {todos.length > 1 && (
        <div className="flex-auto underline" onClick={() => handleDeleteAll()}>
          Delete All
        </div>
      )}
      {todos.filter((todo) => todo.checked).length < todos.length ? (
        <div className="underline" onClick={() => handleToggleAll(true)}>
          Check All
        </div>
      ) : (
        <div className="underline" onClick={() => handleToggleAll(false)}>
          Uncheck All
        </div>
      )}
    </div>
  );
};
export default MassHandlers;
