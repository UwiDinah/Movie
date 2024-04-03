import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`);
                setDetails(data);
                console.log("The data we need", data);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
        getDetails();
    }, [id]);

    return (
        <Link to={`/movies/${details?.id}`}>
            <div className="bg-gray-900 mt-0">
                {details ? (
                    <div className='px-4 mb-2 mx-20 flex flex-wrap'>
                        <div className="w-1/2">
                            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className='w-96' alt={details.title} />
                        </div>
                        <div className="w-1/2 mx-10 space-y-5 mt-20 sm:w-full">
                            <h6 className="text-bold text-xl text-white">{details.name}</h6>
                            <p className="text-xl text-white">Year: {details.first_air_date}</p>
                            <p className="text-xl text-white">Rate: {details.vote_average}</p>
                            <p className="text-xl text-white">Overview: {details.overview}</p>
                        </div>
                    </div>
                ) : (
                    <div>No details found</div>
                )}
            </div>
        </Link>
    );
}

export default Details;