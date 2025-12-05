"use client";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
      </div>
    </div>
  );
}
