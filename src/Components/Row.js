import React, {useState, useEffect} from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row(props){
    const imgBaseURL = 'http://image.tmdb.org/t/p/original/';
    const fetchBaseURL = 'https://api.themoviedb.org/3';
    
    const [movies, setMovies] = useState([]);
    const [videoURL, setVideoURL] = useState('');

    useEffect(async () => {
        const response = await fetch(`${fetchBaseURL}${props.fetchURL}`);
        const data = await response.json();
        setMovies(data.results);
        return data;
    }, [props.fetchURL]);

    const handleClick = (movie) => {
        console.log(movie);
    };

    return (
        <div>
           <h3 className="movie-header">{props.title}</h3>
           <div className="row_posters">
            {movies.map((movie) => {
                return (
                    <img 
                        onClick={() => handleClick(movie)} 
                        key={movie.id} 
                        className="row_poster" 
                        src={`${imgBaseURL}${props.isLargeRow? movie.poster_path: movie.backdrop_path}`}
                    />
                )
             })  
            }
           </div>
        </div>
    );
}

export default Row;
