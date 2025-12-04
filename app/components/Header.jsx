"use client";

export default function Header() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("LoggedInUser")) || { name: "User" }
      : { name: "User" };

  return (
    <header className="bg-white shadow-sm px-8 py-4 justify-between items-center flex rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Good Morning, {user.name}!
        </h1>
        <p className="text-sm text-gray-500">What do you plan to do today?</p>
      </div>
      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
        {user.name.charAt(0).toUpperCase()}
      </div>
    </header>
  );
}
