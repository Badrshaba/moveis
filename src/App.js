import React from 'react'
import Haeder from './componant/Haeder.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home.jsx'
import Movies from './page/Movies/Movies.jsx'
import Series from './page/Series/Series.jsx'
import MoviesPageDetails from './page/Details/MoviesPageDetails.jsx'
import SeriesPageDetails from './page/Details/SeriesPageDetails.jsx'
import Footer from './componant/Footer.jsx'
import LogIn from './page/logIn/LogIn.jsx'


const App = () => {
  return (
    <div>
      <div className='bg-black '>

     
      <Haeder/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/movies/details/:id' element={<MoviesPageDetails/>}/>
        <Route path='/series/details/:id' element={<SeriesPageDetails/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App