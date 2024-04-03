import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

function Fullmovie() {
    const { id } = useParams();
    const [movieKey, setMoviekey] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const ifUserIsLoggedIn = () => {
            const userData = localStorage.getItem("userData");
            if (userData == null) {
                navigate("/login", {
                    state: { prevLocation: location.pathname },
                });
            }
        };

        ifUserIsLoggedIn();

        const fetchMovieData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`);
                console.log(response.data.results[0]);
                setMoviekey(response.data.results[0]);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [id, navigate, location]);

    return (
        <div className='bg-gray-900'>
            <p className='mt-20 mx-20'>
                {movieKey && (
                    <YouTube videoId={`${movieKey.key}`} />
                )}
            </p>
        </div>
    );
}

export default Fullmovie;
