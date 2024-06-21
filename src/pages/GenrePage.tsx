import {Genres} from "../components/GenreContainer/Genres";
import {Pagination} from "../components/MovieContainer/Pagination";

const GenrePage = () => {
    return (
        <div>
            <Genres/>
            <Pagination/>
        </div>
    );
};

export {GenrePage};