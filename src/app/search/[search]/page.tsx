import MovieCarousel from "@/app/components/MovieCarousel";
import FetchMovies from "@/app/components/FetchMovies";
import SideMenu from "@/app/components/SideMenu";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function SearchResultPage({ params }: { params: { search: string } }) {
  const { search } = await Promise.resolve(params);
  const query = decodeURIComponent(search);
  const movies = await FetchMovies(`https://tv.lk21official.cc/?s=${encodeURIComponent(query)}`);

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      <SideMenu />
      <main className="ml-16 pb-20 px-8 pt-8">
        <Link href="/search" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <FaArrowLeft /> Back to Search
        </Link>
        <h1 className="text-3xl font-bold mb-8">
          Results for: <span className="text-red-500">{query}</span>
        </h1>
        {movies.length > 0 ? (
          <MovieCarousel title={`${movies.length} movies found`} movies={movies} />
        ) : (
          <p className="text-gray-400 text-xl">No movies found for &quot;{query}&quot;. Try a different keyword.</p>
        )}
      </main>
    </div>
  );
}
