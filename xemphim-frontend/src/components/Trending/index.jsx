import MovieCard from "../MovieCard";
import { moviesData } from "../../data/moviesData";

const Trending = () => {
    return (
        <>
            <h4 className="border-b border-primary mt-12 mb-6 pb-4">
                Trending
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mb-6">
                {moviesData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
            <div className="text-center">
                <button className="button hover:scale-125 transition ease-out duration-300">
                    Load More
                </button>
            </div>
        </>
    );
};

export default Trending;
