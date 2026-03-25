import MovieCarousel from "@/app/components/MovieCarousel";
import FetchMovies from "@/app/components/FetchMovies";
import FetchGenres from "@/app/components/FetchGenres";
import FetchYears from "@/app/components/FetchYears";
import SideMenu from "@/app/components/SideMenu";
import SearchClient from "@/app/components/SearchClient";
import Link from "next/link";

export default async function SearchPage() {
  const [genres, years] = await Promise.all([
    FetchGenres(),
    FetchYears(),
  ]);

  const [moviesByGenre, moviesByYear] = await Promise.all([
    Promise.all(genres.map((genre) => FetchMovies(`https://lk21.film/genre/${genre.url}`))),
    Promise.all(years.map((year) => FetchMovies(`https://lk21.film/year/${year.url}`))),
  ]);

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans p-8 ml-8">
      <SideMenu />
      <h1 className="text-3xl font-bold mb-6 ml-10">Search</h1>
      <SearchClient />

      <h1 className="text-3xl font-bold mb-6 ml-10">Genre</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 ml-10">
        {genres.map((genre) => (
          <Link
            key={genre.url}
            href={`/genre/${genre.url}`}
            className="block bg-gray-700 p-3 rounded-lg hover:bg-gray-600 text-center"
          >
            {genre.name}
          </Link>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6 ml-10">Release</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 ml-10">
        {years.map((year) => (
          <Link
            key={year.url}
            href={`/year/${year.url}`}
            className="block bg-gray-700 p-3 rounded-lg hover:bg-gray-600 text-center"
          >
            {year.name}
          </Link>
        ))}
      </div>

      {genres.map((genre, index) => {
        const movies = moviesByGenre[index];
        return movies.length > 0 ? (
          <div key={genre.url} className="mb-12">
            <MovieCarousel title={genre.name} movies={movies} />
          </div>
        ) : null;
      })}

      {years.map((year, index) => {
        const movies = moviesByYear[index];
        return movies.length > 0 ? (
          <div key={year.url} className="mb-12">
            <MovieCarousel title={year.name} movies={movies} />
          </div>
        ) : null;
      })}
    </div>
  );
}
