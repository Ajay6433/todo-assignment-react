import { useState } from "react";
function TodoItem({ todos, setTodos }) {
    const { task, completed } = todos;
    const [isCompleted, setIsCompleted] = useState(completed);

    function handleToggle() {
        setIsCompleted(!isCompleted);
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todos.id ? { ...todo, completed: !isCompleted } : todo
            )
        );
    }

    function handleEdit() {
        const newTask = prompt("Edit your todo:", task);
        if (newTask && newTask.trim() !== "") {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === todos.id ? { ...todo, task: newTask } : todo
                )
            )
        } else {
            alert("Please enter a valid todo");
            return;
        }
    }

    function handleDelete() {
        setTodos((prev) => prev.filter((todo) => todo.id !== todos.id));
    }

    return (
        <div className="bg-white hover:shadow-md rounded p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                    className="mr-2 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span
                    className={`text-lg ${isCompleted ? "line-through text-gray-500" : "text-gray-900"}`}
                    onClick={handleToggle}
                >
                    {task}
                </span>
            </div>
            <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleEdit}>
                    ✏️
                </button>
                <button className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleDelete}>
                    ❌
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
