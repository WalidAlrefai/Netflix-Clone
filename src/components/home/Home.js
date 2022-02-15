import React, { useEffect, useState } from "react";

import MoviesList from '../movieList/MovieList';
import "./Home.css"

function Home() {
    const [movie, setMovie] = useState();
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

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="home">
            <h1>Home Page</h1>
                {
                    movie && (<MoviesList movies={movie} />)
                }
         

        </div>
    )
}

export default Home;