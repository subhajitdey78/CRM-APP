import React, { useState, useEffect } from "react"
import { getAllMovies } from "../../../api/movie/index";
import "./LandingPage.css"
const LandingPage = () => {

    const [ movieList, setMovieList ] = useState([]);
    const [ pageLoading, setPageLoading ] = useState(true);

    const init = async () => {
        const result = await getAllMovies();
        setMovieList(result.data);
        setPageLoading(false);
    }

    useEffect(() => { init() },[])
    
    return (
        <div>
            <div className="container mx-5 my-2">
                <p className='fw-bloder'>Recommended Movies</p>
                <div className="row">
                    {
                        movieList.map((movie) => (
                            <div className='col d-flex h-200' key={movie.name}>
                                <div className='card' style={{height : 20 + "rem", width: 15 + "rem"}}>
                                <img src={movie.posterUrl} className='card-img-top' alt={`The poster for ${movie.name}`} />
                                <div className='bg-dark text-white py-2 top'>
                                    < i className='bi bi-hand-thumbs-up-fill p-2 text-success'>58k</i>
                                    {movie.name}
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage