import {FC} from "react";

import {IGenre} from "../../interfaces/GenreInterface";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    return (
        <div>
            {genre.name}
        </div>
    );
};

export {Genre};