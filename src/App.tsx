import React, { useState } from "react";
import TodoDiv from "./components/todoDiv";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = () => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex py-4 px-4 bg-white w-full justify-between *:font-semibold">
        <span>My Todo List</span>
        <span>React</span>
      </div>

      <div className="flex w-full px-4 py-6 justify-between items-center bg-slate-200">
        <div className="flex gap-4 *:font-semibold *:text-lg">
          <div>
            <span className="pr-4">Title</span>
            <input
              type="text"
              className="rounded-lg py-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <span className="pr-4">Content</span>
            <input
              type="text"
              className="rounded-lg py-1"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            className="py-2 px-14 rounded-xl bg-[rgb(0,128,128)]"
            onClick={onSubmit}
          >
            <span className="font-semibold text-white">Add</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full pt-4 px-4 gap-8">
        <div className="flex flex-col gap-4 ">
          <span className="font-semibold text-3xl">Working...🔥</span>
          <div className="grid grid-cols-3 gap-4">
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <TodoDiv
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  content={todo.content}
                  isDone={todo.isDone}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-semibold text-3xl">Done..! 🎉</span>
          <div className="grid grid-cols-3 gap-4">
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => (
                <TodoDiv
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  content={todo.content}
                  isDone={todo.isDone}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
