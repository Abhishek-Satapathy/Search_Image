import React, { useEffect, useState } from "react";
import { ResultCard } from "./ResultCard";
import SkeletonCard from "./SkeletonCard";
import { useSelector } from "react-redux";
import { fetchPhotos } from "../services/api";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ResultGrid = () => {
  const { query, per_page } = useSelector((state) => state.search);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // ✅ Reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetchPhotos(query, page, per_page);
        setData(res.results || []);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page, per_page]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {/* Skeleton */}
        {loading &&
          Array.from({ length: per_page }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

        {/* No Result */}
        {!loading && data.length === 0 && query && (
          <p className="col-span-full text-center text-gray-400">
            No results found 😢
          </p>
        )}

        {/* Data */}
        {data.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {data.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <span className="text-gray-400 text-sm">Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default ResultGrid;