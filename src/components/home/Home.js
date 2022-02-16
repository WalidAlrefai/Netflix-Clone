import React, { useEffect, useState } from "react";

import MoviesList from '../movieList/MovieList';
import "./Home.css"

function Home() {
    const [movies, setMovie] = useState();
    const getMovie = async () => {
        
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    function updateMovies(newMovie, id) {
        let updatesMovie = movies.map(movie => {
            if (movie.id === id) {
                movie.comment = newMovie.comment;
                return movie;
            } else {
                return movie;
            }
        })
        setMovie(updatesMovie);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className="home">
            <h1 style={{margin:"15px"}}>Home Page</h1>
                {
                    movies && (<MoviesList movies={movies} updateMovies={updateMovies} />)
                }
        </div>
    )
}
export default Home;