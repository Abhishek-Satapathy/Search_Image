import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPerPage, setQuery } from "../redux/features/searchSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
  const ddl = [10, 20, 30];
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(setQuery(text.trim()));
  };

  return (
    <div className="w-full flex justify-center mb-8">
      <div className="flex items-center gap-3 w-full max-w-5xl bg-white/5 backdrop-blur-lg p-2 rounded-xl border border-white/10 shadow-lg">

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex items-center flex-1">
          <input
            type="text"
            placeholder="Search high-resolution photos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
          />

          <button
            type="submit"
            className="p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
          >
            <Search size={16} />
          </button>
        </form>

        {/* Dropdown */}
        <select
          onChange={(e) => dispatch(setPerPage(Number(e.target.value)))}
          className="bg-gray-900/80 px-3 py-2 text-sm rounded-md border border-gray-700 hover:border-indigo-500 transition"
        >
          {ddl.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;