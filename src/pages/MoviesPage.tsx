import {MoviesList} from "../components/MovieContainer/MoviesList";
import {Pagination} from "../components/MovieContainer/Pagination";

const MoviesPage = () => {
    return (
        <div>
            <Pagination/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};