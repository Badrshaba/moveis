import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getTopSeries } from '../../system/TopSeires';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const TopSeries = () => {
    const dis=useDispatch()
    const {TopSeries}=useSelector((e)=>e.topSerie)
    useEffect(()=>{
        dis(getTopSeries())
    },[])
   
  return (
    <div className=' container mt-5'>
        <h2 className=' text-primary'>Top Series</h2>
        <div className=' d-flex flex-wrap justify-content-evenly'>
        {TopSeries.map((e,index)=>(
                    <Card style={{ width: '16rem' }}bg="dark" variant="dark" key={index} className='m-3' >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.backdrop_path}`} />
                    <Card.Body >
                      
                      <Card.Text className=' text-white'>
                        {e.name}
                      </Card.Text>
                      <Card.Text className=' '>
                      {/* <Rating
  initialRating={e.vote_average/2}
  readonly={<AiFillStar href="#icon-star-full" className="icon" />}
  
/> */}
<p className=' text-white d-flex justify-content-between'>Rating : <span className=' text-warning'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar className=' text-black-50'/></span></p>

                      </Card.Text>
                      <div className=' w-100 text-center'>
                      <Button as={Link} to={`/series/details/${e.id}`} variant="outline-info">Details</Button>{' '}
                      </div>
                      
                    </Card.Body>
                  </Card>
        ))} 
</div>
    </div>
  )
}

export default TopSeries