import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovies] = useState({});

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovies(data);

    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
       <>
        <h1>{movie.title}</h1>
        <article>
            {movie.overview}
        </article>
        </>
    )


}