import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MoviesSlideDetails } from '../../system/MoviesSlideDetails';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const MoviesPageDetails = () => {
  const {id} = useParams()
  const dis = useDispatch()
  const {moviesDetails,loading}= useSelector(e=>e.moviesDetail) 
  const back = useNavigate();
  useEffect(()=>{
    dis(MoviesSlideDetails(id))
  },[])
  const  backHome=()=>{
    back("/",{state:{name:"badr"}} )
  };
   
  return (
    <div >
      {loading?
       <div className=" d-flex justify-content-center "><Spinner animation="border" variant="light" /></div>
       
      :
      <div>
      <h1 className=' text-center text-info'>Movie-Detals</h1>
 <div className=' d-flex justify-content-evenly pb-5'>
   <div className=' d-flex justify-content-center'><img width={"50%"} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviesDetails.backdrop_path}`} alt="" /></div>
   <div className=' w-75'>
     <h1 className=' text-white'>{moviesDetails.original_title}</h1>
     <p className=' text-white d-flex'>{moviesDetails.release_date} <span>[{moviesDetails.original_language}] </span>{Math.trunc(moviesDetails.runtime/60)}h </p> 

     <h3 className=' d-inline text-primary'>OverView : </h3>
     <p className=' d-inline text-white'>{moviesDetails.overview}</p>
     <h3 className=' text-primary'>Casting : </h3>
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
  )
}

export default MoviesPageDetails