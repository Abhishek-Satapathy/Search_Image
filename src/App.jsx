import React, { Suspense } from "react";
import Header from "./components/Header";

const ResultGrid = React.lazy(() => import("./components/ResultGrid"));

const Loader = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="h-80 bg-gray-800/50 animate-pulse rounded-xl" />
    ))}
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#020617] to-black text-white p-6">
      <Header />
      <Suspense fallback={<Loader />}>
        <ResultGrid />
      </Suspense>
    </div>
  );
};

export default App;
