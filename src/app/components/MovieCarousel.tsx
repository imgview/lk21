import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

const MovieCarousel = ({ title, movies }) => (
    <div className="px-12 mt-8 pb-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="flex overflow-x-scroll gap-4 no-scrollbar">
            {movies.map((m, i) => (
                <div key={i} className="group relative w-48 shrink-0 bg-[#222] rounded-lg overflow-hidden transition transform duration-300 hover:scale-110 hover:z-10">
                    <div className="relative w-full h-80">
                        <Image
                            src={m.image}
                            alt={m.name || "movie"}
                            fill
                            className="object-cover transition duration-300 group-hover:brightness-50"
                            unoptimized
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-black/80">
                        <h1 className="text-2xl font-bold mb-2">{m.name}</h1>
                        <p className="text-sm text-gray-400 mb-2">⭐ {m.rating}</p>
                        <p className="text-sm text-gray-400 mb-5">{m.genre}</p>
                        <div className="flex gap-4 mb-2">
                            <a href={new URL(m.url).pathname} className="bg-white text-black p-2 rounded-lg font-bold flex items-center gap-2">
                                <FaPlay /> Play
                            </a>
                            <a href={m.trailer}><button className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg font-bold flex items-center gap-2">
                                <FaInfoCircle /> Info
                            </button></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default MovieCarousel;
