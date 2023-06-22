
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllSeries } from "../../system/SeriesSlick";

 const SeriesSlick = ()=> {
  
  const dic = useDispatch()
  const {series} = useSelector(s=>s.series)

  useEffect(()=>{
    dic(getAllSeries())
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
        <h2 className=" text-primary"> Series</h2>
        <div className="">
          <Slider {...settings}  className=" ">
        {series.map((e,index)=>(
        
          <div key={index}>
                <img width='75%' className="m-4" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.backdrop_path}`}  />
          </div>
        
          

       ))}
        </Slider>
        </div>
      </div>
    );
  }

export default SeriesSlick