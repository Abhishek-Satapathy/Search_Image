import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

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

const CategoryNavbar = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);

  return (
    <div className="w-full overflow-x-auto mb-6">
      <div className="flex gap-3 min-w-max px-1">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setQuery(cat))}
            className={`
              px-4 py-2 text-sm rounded-full whitespace-nowrap transition
              ${query === cat
                ? "bg-indigo-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"}
            `}
          >
            {cat}
          </button>
        ))}

      </div>
    </div>
  );
};

export default CategoryNavbar;