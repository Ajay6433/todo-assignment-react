import { useState } from "react";
import nextId from "react-id-generator";

function Header({ setTodos }) {
    const [todo, setTodo] = useState("");

    const handleTodo = () => {
        if (todo.trim()) {
            setTodos((prev) => [
                ...prev,
                {
                    id: nextId("todo-"), // Generates a unique ID for each todo, But in the development phase, it will generate a new ID with difference of 2, because of the Strict Mode's double rendering example todo-1, todo-3 etc.
                    task: todo,
                    completed: false
                }
            ]);
            setTodo("");
        } else {
            alert("Please enter a todo");
            return;
        }
    };

    return (
        <div className="flex items-center gap-2 p-4 bg-white rounded shadow">
            <input
                type="text"
                placeholder="Add a new todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={handleTodo}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Add Todo
            </button>
        </div>
    );
}

export default Header;