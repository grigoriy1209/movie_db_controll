import {Genres} from "../components/GenreContainer/Genres";
import {Pagination} from "../components/MovieContainer/Pagination";

const GenrePage = () => {
    return (
        <div>
            <Pagination/>
            <Genres/>

        </div>
    );
};

export {GenrePage};