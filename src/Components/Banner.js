import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner(props){
    const fetchBaseURL = 'https://api.themoviedb.org/3';
    const imgBaseURL = 'http://image.tmdb.org/t/p/original/';

    const [movie, setMovie] = useState([]);

    useEffect(async () => {
        const response = await fetch(`${fetchBaseURL}${props.fetchURL}`);
        const data = await response.json();
        setMovie(data.results[Math.floor(Math.random()* 19)]);
        return data;
    }, []);

    // console.log(movie);
    function truncate(str, n){
        return str?.length>n? str.substr(0, n-1) + "..." : str; 
    }

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${imgBaseURL}${movie.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-content">
                <h2 className="banner-title">{movie.name}</h2>
                <button className="banner-btn">Play</button>
                <button className="banner-btn">My List</button>
                <p className="banner-movie-info">{truncate(movie?.overview, 150)}</p>
            </div>
 
            <div className="fade-bottom"></div>    
        </header>
    )
}

export default Banner;