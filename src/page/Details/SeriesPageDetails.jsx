import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { SeriesSlideDetails } from '../../system/SeriesSlideDetails';
const SeriesPageDetails = () => {
  const {id} = useParams()
  const dis = useDispatch()
  const {SeriesDetails}= useSelector(e=>e.SeriesDetail)
  useEffect(()=>{
    dis(SeriesSlideDetails(id))
  },[])
const back = useNavigate()
const backHome = ()=>{
  back("/")
}
console.log(SeriesDetails);
   console.log(id);
  return (
    <div >
    <div>
           <h1 className=' text-center text-info'>Series-Detals</h1>
      <div className='  pb-5 d-flex justify-content-evenly flex-wrap  '>
        <div className=' d-flex justify-content-center col-lg-3  col-md-3'><img width={"55%"} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${SeriesDetails.backdrop_path}`} alt="" /></div>
        <div className=' w-75 d-flex flex-column justify-content-center col-lg-6 col-md-6'>
          <h1 className=' text-white '>{SeriesDetails.name}</h1>
          <p className=' text-white d-flex w-50 justify-content-between'>{SeriesDetails.last_air_date} <span>[{SeriesDetails.original_language}] </span>{SeriesDetails.number_of_episodes}e </p> 

          <h3 className=' d-inline text-primary'>OverView : </h3>
          <p className=' d-inline text-white'>{SeriesDetails.overview}</p>
          <h3 className=' text-primary'>Casting : </h3>
          <div>
            <div className=' d-grid justify-content-center'>
            <Button onClick={backHome} variant="primary">Back</Button>{' '}
            </div>
          
          </div>
        </div>
      </div> 
      
      </div>


      </div>
  )
}



export default SeriesPageDetails