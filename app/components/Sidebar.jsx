"use client";

import TaskForm from "@/components/TaskForm";

export default function Sidebar({ selectedList, setSelectedList, addTodo }) {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };

  return (
    <aside className="w-80 bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-4">To-Do:</h2>
        <TaskForm addTodo={addTodo} />
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Tasks</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedList("All tasks")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "All tasks"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>☑️</span> All tasks
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedList("Important")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "Important"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>⭐</span> Important
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedList("Overdue")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "Overdue"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>📅</span> Overdue
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-600">List</h3>
            <button className="text-purple-600 text-xl font-bold hover:text-purple-700 transition">
              +
            </button>
          </div>

          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelectedList("Work")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "Work"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                Work
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedList("Personal")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "Personal"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                Personal
              </button>
            </li>

            <li>
              <button
                onClick={() => setSelectedList("School")}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                  selectedList === "School"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                School
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 transition font-medium"
        >
          <span>🚪</span> Log Out
        </button>
      </div>
    </aside>
  );
}
