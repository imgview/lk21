"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-6 ml-10">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
      />
      <button type="submit" className="bg-red-600 px-4 py-2 rounded-lg text-white font-bold flex items-center gap-2">
        <FaSearch /> Search
      </button>
    </form>
  );
}
