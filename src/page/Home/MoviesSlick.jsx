
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllMovies } from "../../system/MoviesSlice";
import Spinner from 'react-bootstrap/Spinner';
 const MoviesSlick = ()=> {
  
  const dic = useDispatch()
  const {movies,loading} = useSelector(e=>e.movies)
  

  useEffect(()=>{
    dic(getAllMovies())
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
    return (
     <div className=" container mt-5 ">
<h2 className=" text-primary"> MOVIES</h2>
{loading?    <div className=" d-flex justify-content-center"><Spinner animation="border" variant="light" /></div>  :<div >
  <Slider {...settings}  className=" ">
{movies.map((e,index)=>(

  <div key={index}>
        <img width='75%' className="m-4" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.backdrop_path}`}  />
  </div>

  

))}
</Slider>
</div>}
</div>
    );
  }

export default MoviesSlick