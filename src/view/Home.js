import { useEffect, useState } from "react";
import { MovieList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        console.log(data);
        setMovies(data.results);

    }

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <MoviesContainer>
            <MovieList movies= {movies} />
        </MoviesContainer>
    )
};