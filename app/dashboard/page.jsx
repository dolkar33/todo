"use client";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [selectedList, setSelectedList] = useState("All Tasks");
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        selectedList={selectedList}
        setSelectedList={setSelectedList}
        addTodo={addTodo}
      />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <TaskList
            todos={todos}
            setTodos={setTodos}
            selectedList={selectedList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
          <TaskForm addTodo={addTodo} selectedList={selectedList} />
        </main>
      </div>
    </div>
  );
}
