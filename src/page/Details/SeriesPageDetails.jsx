import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { SeriesSlideCast, SeriesSlideDetails } from '../../system/SeriesSlideDetails';
import Slider from "react-slick";
import "../style/home.css"
const SeriesPageDetails = () => {
  const {id} = useParams()
  const dis = useDispatch()
  const {SeriesDetails,loading}= useSelector(e=>e.SeriesDetail)
  const {SeriesCast,SeriesCrow}= useSelector(e=>e.SeriesCast) 
  useEffect(()=>{
    dis(SeriesSlideDetails(id))
    dis(SeriesSlideCast(id))
  },[])
const back = useNavigate()
const backHome = ()=>{
  back(-1)
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <div >
      <div className=' text-center ' >
      {loading?
       <div className=" d-flex justify-content-center "><Spinner animation="border" variant="light" /></div>
       
      :
   <div>
       <div className='backImg'  style={{
              background: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${SeriesDetails.poster_path})`,
            }}>
      <h1 className=' text-center text-info'>Series-Detals</h1>
 <div className=' d-flex justify-content-evenly pb-5 flex-wrap'>
   <div className=' d-flex justify-content-center col-lg-6 col-md-6 '><img width={"50%"} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${SeriesDetails.backdrop_path}`} alt="" /></div>
   <div className='  col-lg-6 col-md-6'>
     <h1 className=' text-white'>{SeriesDetails.name}</h1>
     <p className=' text-white d-flex justify-content-center'>{SeriesDetails.last_air_date}  <span>  [{SeriesDetails.original_language}] </span> <span className=' text-success me-2 ms-2'> {SeriesDetails.number_of_episodes}</span> episode </p> 

     <h3 className=' d-inline text-primary'>OverView : </h3>
     <p className=' d-inline text-white'>{SeriesDetails.overview}</p>
     <h3 className=' text-primary'>Casting : </h3>
     <div className=' text-white d-flex justify-content-evenly flex-wrap'>{SeriesCast.filter((e,w)=>w<5).map((e,w)=>(<p key={w} className=' m-3'>{e.original_name}<br/><span className=' text-warning'>{e.known_for_department}</span></p>))} </div>
     <div className=" text-white d-flex justify-content-evenly flex-wrap">
                  {SeriesCrow
                    .filter((e, w) => w < 5)
                    .map((e, w) => (
                      <p key={w} className=" m-3">
                        {" "}
                        || {e.original_name} || <br />
                        <span className=" text-warning">
                          {e.known_for_department}
                        </span>
                      </p>
                    ))}{" "}
                </div>
     <div>
       <div className=' d-grid justify-content-center'>
       <Button onClick={backHome} variant="primary">Back</Button>{' '}
       </div>
     
     </div>
   </div>
 </div> 
 
 </div>
 <div className=" d-flex flex-column align-items-center " >
            <div className=" w-75 float-start">
            <h3 className=" text-warning mt-3">Actors</h3>
            </div>
            <Slider {...settings} className=" mt-3 widthSLICK">
              {SeriesCast.filter((e) => e.profile_path).map((e, index) => (
                <div key={index}>
                  <img
                    width="75%"
                    className=" m-auto"
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.profile_path}`}
                  />
                  <p className=" text-center text-warning">{e.known_for_department}</p>
                </div>
              ))}
            </Slider>
          </div>
   </div>
      
      }



      </div>


      </div>
  )
}



export default SeriesPageDetails