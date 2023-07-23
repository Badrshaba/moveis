import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { SeriesSlideCast, SeriesSlideDetails } from '../../system/SeriesSlideDetails';
const SeriesPageDetails = () => {
  const {id} = useParams()
  const dis = useDispatch()
  const {SeriesDetails,loading}= useSelector(e=>e.SeriesDetail)
  const {SeriesCast}= useSelector(e=>e.SeriesCast) 
  useEffect(()=>{
    dis(SeriesSlideDetails(id))
    dis(SeriesSlideCast(id))
  },[])
const back = useNavigate()
const backHome = ()=>{
  back(-1)
}
console.log(SeriesCast);
   
  return (
    <div >
      <div className=' text-center' >
      {loading?
       <div className=" d-flex justify-content-center "><Spinner animation="border" variant="light" /></div>
       
      :
      <div>
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
     <div>
       <div className=' d-grid justify-content-center'>
       <Button onClick={backHome} variant="primary">Back</Button>{' '}
       </div>
     
     </div>
   </div>
 </div> 
 
 </div>
      
      }



      </div>


      </div>
  )
}



export default SeriesPageDetails