import TodoItem from "./TodoItem";
//passed todos and setTodos as props to the TodoList component
function TodoList({ todos, setTodos }) {
    return (
        <div className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Todo List</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todos={todo} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;