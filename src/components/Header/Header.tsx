import {Link} from "react-router-dom";

import css from './Header.module.css'


const Header = () => {
    let searchMovie = () => {
    }
    return (
        <div>
            <div className={css.Nav}>
                <a href="/">Sign Up</a>
                <h2>Movie</h2>
                <a href="/">Register</a>

            </div>

            <div className={css.Header}>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/genres'}>Genres</Link>
                <input type="search" placeholder="&#128269; search" onChange={searchMovie}/>
            </div>
        </div>

    );
};

export {Header};