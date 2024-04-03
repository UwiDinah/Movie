import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=8ed493abe40fced7a86dfbabff806998`);
                setMovies(response.data.results);
                setError('');
            } catch (error) {
                setError('Error fetching movies. Please try again.');
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, [query]);

    return (
        <div className="container mx-auto p-4">
            <form className="mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:placeholder-gray-600"
                    placeholder="Search for movies..."
                />
            </form>

            {error && <p className="text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <Card key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Search;
