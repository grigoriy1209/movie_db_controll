import {FC} from "react";
import {IMovie} from "../../interfaces/moviesInterface";
interface IProps{
    movie:IMovie
}

const MovieInfo:FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.id}
        </div>
    );
};

export {MovieInfo};