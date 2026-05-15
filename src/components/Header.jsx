import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPerPage, setQuery } from "../redux/features/searchSlice";
import { Search } from "lucide-react";

const categories = [
  "Wallpapers",
  "3D Renders",
  "Nature",
  "Textures",
  "Film",
  "Architecture",
  "Street Photography",
  "Experimental",
  "Travel",
  "People",
];

const Header = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);

  const [text, setText] = useState("");

  // ✅ Debounce Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!text.trim()) {
        dispatch(setQuery("")); // clear results
      } else {
        dispatch(setQuery(text.trim()));
      }
    }, 400); // ⏱ delay (300–500ms ideal)

    return () => clearTimeout(timer);
  }, [text, dispatch]);

  return (
    <div className="w-full flex flex-col items-center gap-6 mb-8">
      {/* 🔍 SEARCH BAR */}
      <div className="w-full max-w-5xl bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 flex items-center shadow-lg">
        {/* ❌ removed form */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search high-resolution photos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
          />

          {/* Left Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={16} />
          </div>
        </div>
        {/* Dropdown */}
        <select
          onChange={(e) => dispatch(setPerPage(Number(e.target.value)))}
          className="ml-3 bg-transparent text-gray-300 px-3 py-2 rounded-md border border-white/10 focus:outline-none"
        >
          {[12, 24, 36].map((num) => (
            <option key={num} value={num} className="bg-black">
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* 🧭 CATEGORY NAVBAR */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-3 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setText(cat); // ✅ sync input with category
                  dispatch(setQuery(cat));
                }}
                className={`
                  px-2 py-1 text-sm rounded-full whitespace-nowrap transition
                  ${
                    query === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
