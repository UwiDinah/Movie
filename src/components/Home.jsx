import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
import image1 from '../assets/images/Group.png';
import images from '../assets/images/Vector@2x.png';
import sv from '../assets/fire.svg'
import { NavLink } from 'react-router-dom';
import Play from '../assets/play.svg';

function Home() {
    const [movies, setMovies] = useState([]);
    const [move, setMove] = useState([]);

    useEffect(() => {
        fetchNowPlaying();
        fetchBeast();
    }, []);

    const fetchNowPlaying = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=83c8a14fd7dc05474f0315e901a94bd3', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
                }
            });
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchBeast = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=a3311cd10c54967ca049ca5d14e4756d', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
                }
            });
            setMove(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <div className='flex relative h-[42rem] items-end justify-center mx-20'>
                <div className='w-[50%] flex flex-col bottom-0 left-16 h-[26rem] border-r-[1px] border-[#060606]'>
                    <div className='w-1/3 h-[1px] bg-[#333232] self-end'></div>
                    <h1 className='text-white text-4xl'>FIND THE MOVIE</h1>
                    <h1 className='text-6xl grad-back'>TV SHOW AND MORE</h1>
                    <p className='text-white'>Loem ipsm has been the industry s standard dummy text </p>
                    <p className='text-white'>ever since the 1500s, when an unknow  printer  took girls </p>
                    <p className='text-white'>of type and scaramble it to make  a types  specimen book. </p>
                    <button className=' mt-8 ring-1 ring-white rounded-md w-48 h-12 font-bold text-white flex items-center justify-center '>
                        <img src={Play} alt="Play" className='h-6 w-6  rounded-full bg-white ' />
                        <span className='pl-4'>Wacth Tutorial</span>

                    </button>


                </div>
                <div className='relative w-1/2 h-[42rem]  flex items-center justify-center border-b-[1px] border-[#333232]'>
                    <img className='w-[25rem] h-[35rem] -mb-20 -mr-20 z-10' src={image1} alt="" />
                    <img src={Play} alt="Play" className='h-24 absolute w-24  z-40 rounded-full bg-white ' />
                    <img className='w-[20rem] h-[31rem]' src={images} alt="" />


                    <span className='absolute bottom-0 right-0 -mb-1 w-2 h-2 bg-[#333232] rounded-full'></span>
                </div>
            </div>

            <div className='flex items-center px-4 py-2 text-black pt-24'>
                <img src={sv} alt="sv" className='h-4 w-4' />
                <p className='flex text-white text-4xl'>Trending</p>
                <hr className='flex-grow border-t border-gray-700 mx-4' />
                <p className='flex'>See More</p>
            </div>
            <div className='grid grid-cols-10 gap-12 px-6 pt-12 pb-14'>
                {movies.map((movie, index) => (
                    <NavLink key={index} to={`/details/${movie.id}`}>
                        <Card
                            key={index}
                            titel={movie.original_title}
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            price={DataTransferItemList.vote_average}
                            vote={movie.vote_average}
                        />
                    </NavLink>
                ))}
            </div>
            <div className='flex items-center px-4 text-black pt-24'>
                <p className='flex'>Trending</p>
                <hr className='flex-grow border-t border-gray-700 mx-4' />
                <p className='flex'>See More</p>
            </div>
            <div className='grid grid-cols-10 gap-12 px-6 pt-12'>
                {move.map((movie, index) => (
                    <NavLink key={index} to={`/details/${movie.id}`}>
                        <Card
                            key={index}
                            titel={movie.original_title}
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            price={DataTransferItemList.vote_average}
                            vote={movie.vote_average}
                        />
                    </NavLink>
                ))}
            </div>
        </>
    );
}

export default Home;