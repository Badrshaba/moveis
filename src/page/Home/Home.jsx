import React, { useEffect } from 'react'
import FirstHome from './FirstHome'
import MoviesSlick from './MoviesSlick'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../../system/MoviesSlice'
import SeriesSlick from './SeriesSlick'
import TopMovies from './TopMovies'
import TopSeries from './TopSeries'
import { useLocation } from 'react-router-dom'
import Scroll from './Scroll'

const Home = () => {
  return (
    <div >
        <FirstHome/>
        <MoviesSlick/>
        <SeriesSlick/>
        <Scroll/>
        <TopMovies/>
        <TopSeries/>
       
        
    </div>
  )
}

export default Home