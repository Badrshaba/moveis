import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { backpage, firstpage, getAllMoviesPage, lastpage, nextpage } from '../../system/MovisPageSlide';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import ShowMoreText from "react-show-more-text";
import Rating from 'react-rating';
import SVGIcon from 'react-rating'
import { Link } from 'react-router-dom';
import "./icon.css"
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Movies = () => {
  const dic = useDispatch()
  const {moviesPage,loading,numPage}= useSelector(e=>e.moviesPage)
  useEffect(()=>{
    dic(getAllMoviesPage(numPage))
  },[numPage])
  
    

  return ( 
    <div>
      <h1 className=' text-center text-info mt-3'>Movies</h1>
      <h3 className=' text-center text-primary mt-3 mb-5'>PAGE NUMBER <span className=' text-white'>{numPage}</span> FROM 500</h3>
      <div>
      {loading?  <div className=" d-flex justify-content-center"><Spinner animation="border" variant="light" /></div> :        <div className=' d-flex flex-wrap justify-content-evenly'>
        {moviesPage.map((e,index)=>(
                    <Card style={{ width: '18rem' }}bg="dark" variant="dark" key={index} className='m-3' >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.backdrop_path}`} />
                    <Card.Body >
                      
                      <Card.Text className=' text-white'>
                        {e.original_title}
                      </Card.Text>
                      <Card.Text className=' '>
                      {/* <Rating
  initialRating={e.vote_average/2}
  readonly={<AiFillStar href="#icon-star-full" className="icon" />}
  
/> */}
<p className=' text-white d-flex justify-content-between'>Rating : <span className=' text-warning'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar className=' text-black-50'/></span></p>

                      </Card.Text>
                      <Card.Text className=' text-white'>
                      <ShowMoreText
                /* Default options */
                lines={1}
                more="Show more"
                less="Show less"
                className="content-css "
                anchorClass="show-more-less-clickable"
                
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
            >
                {e.overview}
            </ShowMoreText>
                      </Card.Text>

                      <div className=' w-100 '>
                      <Button as={Link} to={`/movies/details/${e.id}`} variant="info">Details</Button>{' '}
                      </div>
                      
                    </Card.Body>
                  </Card>
        ))}
</div>}
      </div >
      <div className=' d-flex justify-content-center mt-3'>
      <Pagination>
      <Pagination.First onClick={()=>dic(firstpage())} disabled={numPage==1} />
      <Pagination.Prev  onClick={()=>dic(backpage())} disabled={numPage==1}/>

      <Pagination.Item active >{numPage}</Pagination.Item>
     
   
    
      <Pagination.Next onClick={()=>dic(nextpage())} disabled={numPage==500}/>
      <Pagination.Last onClick={()=>dic(lastpage())} disabled={numPage==500}/>
    </Pagination>
      </div>
 
    </div>
  )
}

export default Movies