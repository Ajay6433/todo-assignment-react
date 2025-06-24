import { useState } from "react";
function TodoItem({ todos, setTodos }) {
    // Destructuring the todos object to get task and completed properties
    const { task, completed } = todos;
    const [isCompleted, setIsCompleted] = useState(completed);

    // This function handles the toggle of the todo item between completed and not completed
    function handleToggle() {
        setIsCompleted(!isCompleted);
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todos.id ? { ...todo, completed: !isCompleted } : todo
            )
        );
    }
    // This function handles the editing of the todo item
    // It prompts the user to enter a new todo and updates the state accordingly
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
    // This function handles the deletion of the todo item
    // It filters out the todo item from the state based on its ID
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
                {/* This span displays the task and applies styles based on completion status */}
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
