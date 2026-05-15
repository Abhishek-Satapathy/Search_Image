import React from "react";

export const ResultCard = ({ item }) => {
  return (
    <a
      href={item.links?.html}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={item.urls?.regular}
        alt={item.alt_description || "Image"}
        className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
        <p className="text-sm text-white">
          {item.user?.name || "Unknown"}
        </p>
      </div>
    </a>
  );
};